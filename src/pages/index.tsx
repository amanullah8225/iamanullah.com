/* eslint-disable sort-imports */
import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import Typed from 'react-typed';

import LogoCypress from 'Public/assets/tools/cypress.svg';
import LogoFigma from 'Public/assets/tools/figma.svg';
import LogoGraphql from 'Public/assets/tools/graphql.svg';
import LogoHygraph from 'Public/assets/tools/hygraph.svg';
import LogoNext from 'Public/assets/tools/nextjs.svg';
import LogoReact from 'Public/assets/tools/reactjs.svg';
import LogoWebpack from 'Public/assets/tools/webpack.svg';
import LogoPrismic from 'Public/assets/tools/prismic.svg';
import LogoStorybook from 'Public/assets/tools/storybook.svg';
import LogoTurboPack from 'Public/assets/tools/turbopack.svg';
import LogoTurboRepo from 'Public/assets/tools/turborepo.svg';
import LogoSvelte from 'Public/assets/tools/svelte.svg';
import LogoVercel from 'Public/assets/tools/vercel.svg';
import data from '../data/aman_ullah_resume_data';
import { WorkExperience } from 'Organisms/WorkExperience';
import { CaseStudy } from 'Molecules/CaseStudy';
import { ICaseStudy, IJob } from '@types';
import { NextPage } from 'next';
import { Button } from 'Atoms/Button';
import { Icon } from 'Atoms/Icon';

interface IProps {
	jobs: IJob[];
	projects: ICaseStudy[];
}

const IndexPage: NextPage<IProps> = ({ jobs, projects }) => {
	return (
		<AnimatePage>
			<SeoHead
				title={data.textContent.homePage.title}
				description={data.textContent.shortDescription.site}
				keywords={data.textContent.homePage.keywords}
			/>
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
						<Typed
							loop
							typeSpeed={80}
							backSpeed={20}
							strings={data.textContent.talkAbout}
							smartBackspace
							backDelay={1000}
							loopCount={0}
							showCursor
							cursorChar="|"
						/>
						.
					</p>
					{/* <p>
						P.S. this website is open-source and available on{' '}
						<a
							href="https://github.com/@amanullah8225/portfolio"
							title="Link to Github repository"
							target="_blank"
							rel="noopener noreferrer"
							className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0"
						>
							Github
						</a>
						.
					</p> */}
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
						{/* <LogoSvelte className="w-12" aria-label="SvelteKit" /> */}
						{/* <LogoHygraph className="w-28 md:w-36" aria-label="Hygraph" /> */}
						{/* <LogoPrismic className="w-32 md:w-40" aria-label="Prismic" /> */}
						<LogoStorybook className="w-32 md:w-40" aria-label="Storybook" />
						<LogoWebpack className="w-48 md:w-40" aria-label="Webpack" />
						{/* <LogoGraphql className="w-28 md:w-36" aria-label="GraphQL" /> */}
						{/* <LogoVercel className="w-32 md:w-36" aria-label="Vercel" /> */}
						<LogoTurboPack className="w-60 md:w-60" aria-label="Turbo Pack" />
						<LogoFigma className="w-8" aria-label="Figma" />
						<LogoTurboRepo className="w-60 md:w-60" aria-label="Turbo Repo" />
						{/* <LogoCypress className="w-32 md:w-40" aria-label="Cypress" /> */}
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
							{/* <div className="w-6 text-blue-500 group-hover:text-off-white dark:text-purple-500">
								<Icon icon="DOWNLOAD" />
							</div> */}
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
		</AnimatePage>
	);
};

export default IndexPage;

export async function getStaticProps() {
	return {
		props: {
			jobs: data.work,
			projects: data.projects,
		},
	};
}
