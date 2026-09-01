/* eslint-disable sort-imports */
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { getResumeVariant, resumeVariants } from 'src/data/resumeVariants';
import { getResumeViewModel } from 'Utils/resume';

import { PrintButton } from './PrintButton';

export const dynamicParams = false;

type Params = { variant: string };

export function generateStaticParams(): Params[] {
	return resumeVariants.map((variant) => ({ variant: variant.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<Params>;
}): Promise<Metadata> {
	const { variant: slug } = await params;
	const variant = getResumeVariant(slug);
	if (!variant) return {};

	const data = getResumeViewModel();
	return {
		title: `Resume (${variant.label})`,
		description: data.summary,
	};
}

export default async function ResumeVariantPage({
	params,
}: {
	params: Promise<Params>;
}) {
	const { variant: slug } = await params;
	const variant = getResumeVariant(slug);
	if (!variant) notFound();

	const data = getResumeViewModel();
	const { Component } = variant;

	return (
		<>
			<Container>
				<div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
					<Button href="/resume" className="text-sm">
						← All formats
					</Button>
					<div className="flex flex-wrap gap-3">
						<Button
							href={`/api/resume-pdf?variant=${slug}`}
							download={true}
							className="text-sm"
						>
							Download PDF
						</Button>
						<PrintButton />
					</div>
				</div>
			</Container>
			<Component data={data} />
		</>
	);
}
