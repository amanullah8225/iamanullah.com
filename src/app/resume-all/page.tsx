/* eslint-disable sort-imports */
import { Metadata } from 'next';

import { Container } from 'Atoms/Container';
import { resumeVariants } from 'src/data/resumeVariants';
import { getResumeViewModel } from 'Utils/resume';

export const metadata: Metadata = {
	title: 'All Resume Formats',
	description: 'Every resume format, one after another, for quick comparison.',
};

export default function ResumeAllPage() {
	const data = getResumeViewModel();

	return (
		<>
			<Container>
				<h1 className="headline mt-8 text-3xl md:text-5xl">All Resume Formats</h1>
				<p className="mt-4 max-w-2xl">
					Every format, stacked one after another. Each one starts on its own
					page when printed.
				</p>
			</Container>

			{resumeVariants.map(({ slug, label, Component }, index) => (
				<div
					key={slug}
					className={
						index < resumeVariants.length - 1 ? 'break-after-page' : undefined
					}
				>
					<Container>
						<p className="mt-12 mb-4 text-sm font-semibold uppercase tracking-widest text-grey-500 print:hidden">
							{label}
						</p>
					</Container>
					<Component data={data} />
				</div>
			))}
		</>
	);
}
