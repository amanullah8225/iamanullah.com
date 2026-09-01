/* eslint-disable sort-imports */
import { Metadata } from 'next';

import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { Icon } from 'Atoms/Icon';
import { Education } from 'Organisms/Education';
import { WorkExperience } from 'Organisms/WorkExperience';
import { CaseStudy } from 'Molecules/CaseStudy';
import { IJob } from '@types';

import data from '../../data/aman_ullah_resume_data';

export const metadata: Metadata = {
	title: 'About Aman Ullah, Senior Frontend Developer',
	description: data.basics.summary,
};

export default function AboutPage() {
	// data.work isn't typed as IJob[] (see note in app/page.tsx).
	const jobs = data.work as unknown as IJob[];
	const { education, projects } = data;

	return (
		<Container>
			<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">
				Hey, I&apos;m Aman Ullah
			</h1>
			<h2 className="font-bold text-xl md:text-2xl mt-2">{data.basics.label}</h2>
			<p className="mt-8">{data.basics.summary}</p>
			<p className="my-4">
				I&apos;m based in {data.basics.location.address}, and I work primarily
				with JavaScript, TypeScript, React, Next.js, Redux, and MobX &mdash;
				building booking platforms, internal design systems, and the APIs behind
				them. I&apos;ve spent the last few years leading frontend teams as much as
				writing frontend code, which is what pulled me toward learning Node.js and
				Express well enough to work across the stack.
			</p>
			<p>
				Outside of shipping features, I care about code that&apos;s testable and
				UI that stays consistent as a product grows &mdash; which is why design
				systems and end-to-end tests (Jest, Playwright) show up repeatedly across
				the roles below. I speak Bengali and English.
			</p>

			<h2 className="headline mt-12 mb-4 text-4xl">Experience</h2>

			<WorkExperience jobs={jobs} />

			<h2 className="headline mt-12 mb-4 text-4xl">Education</h2>

			<Education education={education} />

			<h2 className="headline mt-12 mb-4 text-4xl">Case Studies/Projects</h2>

			{projects.map((caseStudy, i) => (
				<CaseStudy key={caseStudy.slug} {...caseStudy} index={i} />
			))}

			<div className="flex justify-center mt-8">
				<Button
					href="/Aman-Ullah-Resume-7.pdf"
					download={true}
					className="group flex gap-2 whitespace-nowrap"
				>
					<div className="w-6 text-blue-500 group-hover:text-off-white dark:text-purple-500">
						<Icon icon="DOWNLOAD" />
					</div>
					<div className="block headline group-hover:text-off-white">
						Download my CV
					</div>
				</Button>
			</div>
		</Container>
	);
}
