import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import { getResumeVariant, resumeVariants } from 'src/data/resumeVariants';
import { getResumeViewModel, ResumeViewModel } from 'Utils/resume';

interface IProps {
	slug: string;
	label: string;
	data: ResumeViewModel;
}

const ResumeVariantPage: NextPage<IProps> = ({ slug, label, data }) => {
	const variant = getResumeVariant(slug);
	if (!variant) return null;

	const { Component } = variant;

	return (
		<AnimatePage>
			<SeoHead
				title={`${data.name} — Resume (${label}) | ${data.label}`}
				description={data.summary}
			/>
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
						<Button
							onClick={() => window.print()}
							className="text-sm"
							type="button"
						>
							Print / Save as PDF
						</Button>
					</div>
				</div>
			</Container>
			<Component data={data} />
		</AnimatePage>
	);
};

export async function getStaticProps({
	params,
}: {
	params: { variant: string };
}) {
	const variant = getResumeVariant(params.variant);
	if (!variant) {
		return { notFound: true };
	}

	return {
		props: {
			slug: variant.slug,
			label: variant.label,
			data: getResumeViewModel(),
		},
	};
}

export async function getStaticPaths() {
	return {
		paths: resumeVariants.map((variant) => ({
			params: { variant: variant.slug },
		})),
		fallback: false,
	};
}

export default ResumeVariantPage;
