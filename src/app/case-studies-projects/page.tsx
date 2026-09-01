/* eslint-disable sort-imports */
import { Metadata } from 'next';

import { CaseStudy } from 'Molecules/CaseStudy';
import { Container } from 'Atoms/Container';

import data from '../../data/aman_ullah_resume_data';

export const metadata: Metadata = {
	title: 'Software Engineering Case Studies',
	description: `Here you can find ${data.projects.length} case studies of projects I have worked on over the last few years. Learn how I have overcome challenges.`,
};

export default function CaseStudiesProjectsPage() {
	return (
		<Container>
			<h1 className="headline text-3xl md:text-5xl lg:text-6xl pb-8 mt-8">
				Case Studies/Projects
			</h1>
			{data.projects.map((caseStudy, i) => (
				<CaseStudy key={caseStudy.slug} {...caseStudy} index={i} />
			))}
		</Container>
	);
}
