/* eslint-disable sort-imports */
import { promises as fs } from 'fs';

import chromium from '@sparticuz/chromium';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer-core';

import { getResumeVariant } from 'src/data/resumeVariants';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Must match the installed @sparticuz/chromium version (see package.json) —
// used to fetch the matching prebuilt Chromium binary pack from GitHub
// Releases at cold start instead of relying on the bundler to ship the
// binary locally (which Vercel's build doesn't do reliably).
const CHROMIUM_PACKAGE_VERSION = '149.0.0';

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

export async function GET(request: Request) {
	const slug = new URL(request.url).searchParams.get('variant');

	if (!slug || !getResumeVariant(slug)) {
		return NextResponse.json(
			{ error: `Unknown resume variant "${slug}"` },
			{ status: 404 }
		);
	}

	const isServerless = Boolean(process.env.VERCEL);
	let browser: Awaited<ReturnType<typeof puppeteer.launch>> | undefined;

	try {
		if (isServerless) {
			const chromiumPackUrl = `https://github.com/Sparticuz/chromium/releases/download/v${CHROMIUM_PACKAGE_VERSION}/chromium-v${CHROMIUM_PACKAGE_VERSION}-pack.x64.tar`;
			browser = await puppeteer.launch({
				args: chromium.args,
				executablePath: await chromium.executablePath(chromiumPackUrl),
				headless: true,
			});
		} else {
			const executablePath = await findLocalChrome();
			if (!executablePath) {
				return NextResponse.json(
					{
						error:
							'No local Chrome found for PDF generation. Install Google Chrome or set PUPPETEER_EXECUTABLE_PATH.',
					},
					{ status: 500 }
				);
			}
			browser = await puppeteer.launch({ executablePath, headless: true });
		}

		const PAGE_WIDTH = 900;
		const MARGIN = 32;

		const page = await browser.newPage();
		await page.setViewport({ width: PAGE_WIDTH, height: 1200 });
		const protocol = request.headers.get('x-forwarded-proto') || 'http';
		const origin = `${protocol}://${request.headers.get('host')}`;
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

		return new NextResponse(Buffer.from(pdf), {
			status: 200,
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': `attachment; filename="Aman-Ullah-Resume-${slug}.pdf"`,
			},
		});
	} catch (error) {
		return NextResponse.json(
			{
				error:
					error instanceof Error ? error.message : 'Failed to generate PDF',
			},
			{ status: 500 }
		);
	} finally {
		if (browser) {
			await browser.close();
		}
	}
}
