/* eslint-disable sort-imports */
import Link from 'next/link';
import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { Icon } from 'Atoms/Icon';
import { SeoHead } from 'Atoms/SeoHead';
import { resumeVariants } from 'src/data/resumeVariants';
import data from 'src/data/aman_ullah_resume_data';

const ResumeIndexPage: NextPage = () => {
	return (
		<AnimatePage>
			<SeoHead
				title={`Resume Formats | ${data.basics.name}`}
				description="The same resume, presented in several layouts — pick whichever fits where you're sending it."
			/>
			<Container>
				<h1 className="headline mt-8 text-3xl md:text-5xl">Resume</h1>
				<p className="mt-4 max-w-2xl">
					Every format below is generated from the same resume data, just laid
					out differently. Pick whichever reads best for where it&apos;s going.
				</p>

				<Link href="/resume-all" passHref>
					<a className="mt-2 inline-block underline">
						View all formats on one page →
					</a>
				</Link>

				<div className="mt-10 grid gap-6 sm:grid-cols-2">
					{resumeVariants.map((variant) => (
						<Link key={variant.slug} href={`/resume/${variant.slug}`} passHref>
							<a className="block rounded-lg border border-grey-300 p-6 transition hover:border-grey-500 dark:border-grey-700 dark:hover:border-grey-500">
								<h2 className="headline text-xl">{variant.label}</h2>
								<p className="mt-2 text-sm text-grey-600 dark:text-grey-400">
									{variant.description}
								</p>
							</a>
						</Link>
					))}
				</div>

				<div className="mt-12 flex justify-center">
					<Button
						href="/Aman-Ullah-Resume.pdf"
						download={true}
						className="group flex gap-2 whitespace-nowrap"
					>
						<div className="w-6 text-blue-500 group-hover:text-off-white dark:text-purple-500">
							<Icon icon="DOWNLOAD" />
						</div>
						<div className="block headline group-hover:text-off-white">
							Download PDF
						</div>
					</Button>
				</div>
			</Container>
		</AnimatePage>
	);
};

export default ResumeIndexPage;
