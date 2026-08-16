/* eslint-disable sort-imports */
import { promises as fs } from 'fs';

import chromium from '@sparticuz/chromium';
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer-core';

import { getResumeVariant } from 'src/data/resumeVariants';

const LOCAL_CHROME_PATHS = [
	process.env.PUPPETEER_EXECUTABLE_PATH,
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
	'/usr/bin/google-chrome-stable',
	'/usr/bin/google-chrome',
	'/usr/bin/chromium-browser',
	'/usr/bin/chromium',
].filter((path): path is string => Boolean(path));

const findLocalChrome = async () => {
	for (const path of LOCAL_CHROME_PATHS) {
		try {
			await fs.access(path);
			return path;
		} catch {
			continue;
		}
	}
	return null;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { variant } = req.query;
	const slug = Array.isArray(variant) ? variant[0] : variant;

	if (!slug || !getResumeVariant(slug)) {
		res.status(404).json({ error: `Unknown resume variant "${slug}"` });
		return;
	}

	const isServerless = Boolean(process.env.VERCEL);
	let browser: Awaited<ReturnType<typeof puppeteer.launch>> | undefined;

	try {
		if (isServerless) {
			browser = await puppeteer.launch({
				args: chromium.args,
				executablePath: await chromium.executablePath(),
				headless: true,
			});
		} else {
			const executablePath = await findLocalChrome();
			if (!executablePath) {
				res.status(500).json({
					error:
						'No local Chrome found for PDF generation. Install Google Chrome or set PUPPETEER_EXECUTABLE_PATH.',
				});
				return;
			}
			browser = await puppeteer.launch({ executablePath, headless: true });
		}

		const PAGE_WIDTH = 900;
		const MARGIN = 32;

		const page = await browser.newPage();
		await page.setViewport({ width: PAGE_WIDTH, height: 1200 });
		const protocol = (req.headers['x-forwarded-proto'] as string) || 'http';
		const origin = `${protocol}://${req.headers.host}`;
		await page.goto(`${origin}/resume/${slug}`, {
			waitUntil: 'networkidle0',
		});

		await page.emulateMediaType('print');
		const contentHeight = await page.evaluate(
			() => document.documentElement.scrollHeight
		);

		const pdf = await page.pdf({
			width: `${PAGE_WIDTH}px`,
			height: `${contentHeight + MARGIN * 2 + 8}px`,
			printBackground: true,
			margin: {
				top: `${MARGIN}px`,
				bottom: `${MARGIN}px`,
				left: `${MARGIN}px`,
				right: `${MARGIN}px`,
			},
			pageRanges: '1',
		});

		res.setHeader('Content-Type', 'application/pdf');
		res.setHeader(
			'Content-Disposition',
			`attachment; filename="Aman-Ullah-Resume-${slug}.pdf"`
		);
		res.status(200).send(Buffer.from(pdf));
	} catch (error) {
		res.status(500).json({
			error: error instanceof Error ? error.message : 'Failed to generate PDF',
		});
	} finally {
		if (browser) {
			await browser.close();
		}
	}
}
