/* eslint-disable sort-imports */
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';

import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { FloatingImages } from 'Atoms/FloatingImages';

import data from '../../../data/aman_ullah_resume_data';

export const dynamicParams = false;

type Params = { slug: string };

export function generateStaticParams(): Params[] {
	return data.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<Params>;
}): Promise<Metadata> {
	const { slug } = await params;
	const caseStudy = data.projects.find((p) => p.slug === slug);
	if (!caseStudy) return {};

	return {
		title: `Case Study: ${caseStudy.title}`,
		description: caseStudy.seoDescription,
	};
}

export default async function CaseStudyPage({
	params,
}: {
	params: Promise<Params>;
}) {
	const { slug } = await params;
	const caseStudy = data.projects.find((p) => p.slug === slug);
	if (!caseStudy) notFound();

	const {
		title,
		content,
		client,
		technologies,
		secondaryImages,
		primaryImage,
		projectUrl,
	} = caseStudy;

	return (
		<Container>
			<h1 className="headline text-3xl md:text-4xl lg:text-5xl mt-8 pb-4">
				{title}
			</h1>
			<div className="flex flex-col-reverse md:flex-row justify-between md:h-72 md:mb-12">
				<div className="flex flex-col h-full justify-center">
					<strong className="mb-2 text-sm">Client:</strong>
					<div className="mb-4 flex gap-2 items-center">
						{client.logo && (
							<Image
								src={`/assets/companies/${client.logo}.png`}
								alt={client.name}
								width={32}
								height={32}
								className="rounded-md"
							/>
						)}
						<h2 className="font-bold text-xl">{client.name}</h2>
					</div>
					<p className="text-sm w-80">
						<strong>Tech used: </strong>
						{technologies.join(', ')}
					</p>
					{projectUrl && (
						<div className="flex mt-8">
							<Button href={projectUrl} target="_blank" className="group">
								<span className="block headline group-hover:text-off-white">
									Visit project
								</span>
							</Button>
						</div>
					)}
				</div>
				{primaryImage && (
					<div className="-mb-8 md:mb-0">
						<FloatingImages
							topFloatingImage={secondaryImages?.[0]}
							bottomFloatingImage={secondaryImages?.[1]}
							mainImage={primaryImage}
							altText={title}
						/>
					</div>
				)}
			</div>
			<div
				className="mt-8 text-lg prose dark:prose-invert"
				dangerouslySetInnerHTML={{ __html: content as unknown as string }}
			/>
		</Container>
	);
}
