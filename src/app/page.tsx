/* eslint-disable sort-imports */
import { Metadata } from 'next';

import { Container } from 'Atoms/Container';
import { Button } from 'Atoms/Button';
import { Icon } from 'Atoms/Icon';
import { WorkExperience } from 'Organisms/WorkExperience';
import { CaseStudy } from 'Molecules/CaseStudy';
import { IJob } from '@types';

import LogoFigma from 'Public/assets/tools/figma.svg';
import LogoNext from 'Public/assets/tools/nextjs.svg';
import LogoReact from 'Public/assets/tools/reactjs.svg';
import LogoWebpack from 'Public/assets/tools/webpack.svg';
import LogoStorybook from 'Public/assets/tools/storybook.svg';
import LogoTurboPack from 'Public/assets/tools/turbopack.svg';
import LogoTurboRepo from 'Public/assets/tools/turborepo.svg';

import data from '../data/aman_ullah_resume_data';
import { TypedTalkAbout } from './_components/TypedTalkAbout';

export const metadata: Metadata = {
	title: { absolute: data.textContent.homePage.title },
	description: data.textContent.homePage.description,
};

export default function HomePage() {
	// The resume data file isn't typed as IJob[] (extra keys, looser company
	// shape); the Pages Router version relied on getStaticProps skipping this
	// check. The Job component only reads the fields that are present.
	const jobs = data.work as unknown as IJob[];
	const projects = data.projects;

	return (
		<>
			<section id="home" className="h-full">
				<Container>
					<h1
						className="headline mt-20 text-3xl md:text-5xl lg:text-6xl"
						dangerouslySetInnerHTML={
							{ __html: data.textContent.introduction.site } as any
						}
					></h1>
					<p className="my-8 text-lg">
						<span
							className="my-8 text-lg"
							dangerouslySetInnerHTML={
								{ __html: data.textContent.shortDescription.site } as any
							}
						></span>{' '}
						<TypedTalkAbout strings={data.textContent.talkAbout} />.
					</p>
				</Container>
			</section>
			<section id="tools" className="my-40">
				<Container>
					<h2 className="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
						Some of my favourite tools
					</h2>

					<div className="flex flex-wrap items-center justify-center max-w-5xl mt-8 mx-auto gap-x-16 gap-y-8">
						<LogoReact className="w-20" aria-label="React.js" />
						<LogoNext className="w-32" aria-label="Next.js" />
						<LogoStorybook className="w-32 md:w-40" aria-label="Storybook" />
						<LogoWebpack className="w-48 md:w-40" aria-label="Webpack" />
						<LogoTurboPack className="w-60 md:w-60" aria-label="Turbo Pack" />
						<LogoFigma className="w-8" aria-label="Figma" />
						<LogoTurboRepo className="w-60 md:w-60" aria-label="Turbo Repo" />
					</div>
				</Container>
			</section>

			<section>
				<Container>
					<h1 className="headline text-3xl md:text-5xl lg:text-6xl pb-8 mt-8">
						Experience
					</h1>

					<WorkExperience jobs={jobs} />
				</Container>
			</section>

			<section id="projects" className="my-40">
				<Container>
					<h1 className="headline text-3xl md:text-5xl lg:text-6xl pb-8 mt-8">
						Case Studies/Projects
					</h1>

					{projects.map((caseStudy, i) => (
						<CaseStudy key={caseStudy.slug} {...caseStudy} index={i} />
					))}
				</Container>
			</section>

			<section id="services">
				<Container>
					<div className="flex justify-center mt-8">
						<Button
							href="mailto:amanullah8225@gmail.com"
							className="group flex gap-2 whitespace-nowrap mr-4"
						>
							<div className="block headline group-hover:text-off-white">
								Contact Me
							</div>
						</Button>
						<span> </span>
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
			</section>
		</>
	);
}
