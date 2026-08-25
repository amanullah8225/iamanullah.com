/* eslint-disable sort-imports */
import { ICaseStudy } from '@types';

import { client } from 'apollo-client';
import { gql } from '@apollo/client';
import Image from 'next/image';
import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { FloatingImages } from 'Atoms/FloatingImages';
import { SeoHead } from 'Atoms/SeoHead';
import data from '../../data/aman_ullah_resume_data';

interface IProps {
	// caseStudy: ICaseStudy;
	slug: string;
}

const CaseStudyPage: NextPage<IProps> = ({ slug }) => {
	const caseStudy = data.projects.find((p) => p.slug === slug);
	if (!caseStudy) return null;

	const {
		title,
		content,
		seoDescription,
		client,
		technologies,
		secondaryImages,
		primaryImage,
		projectUrl,
	} = caseStudy;

	return (
		<AnimatePage>
			<SeoHead
				title={`Case Study: ${title} - Aman Ullah's Case Studies`}
				description={seoDescription}
			/>
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
		</AnimatePage>
	);
};

type Params = {
	params: { slug: ICaseStudy['slug'] };
};

export async function getStaticProps({ params }: any) {
	console.log('params:', params);
	// const { data } = await client.query({
	// 	query: gql`
	// 		query CaseStudyPageQuery($slug: String!) {
	// 			caseStudy(where: { slug: $slug }) {
	// 				id
	// 				title
	// 				slug
	// 				projectUrl
	// 				seoDescription
	// 				client {
	// 					name
	// 					logo {
	// 						url
	// 					}
	// 				}
	// 				content {
	// 					raw
	// 				}
	// 				technologies {
	// 					skill
	// 				}
	// 				primaryImage {
	// 					url
	// 				}
	// 				secondaryImages {
	// 					url
	// 				}
	// 			}
	// 		}
	// 	`,
	// 	variables: { slug: params.slug },
	// });

	return {
		props: {
			// caseStudy: mapCaseStudies([data.caseStudy])[0],
			slug: params.slug,
		},
	};
}
export async function getStaticPaths() {
	return {
		paths: data.projects.map((p) => ({ params: { slug: p.slug } })),
		fallback: false,
	};
}

export default CaseStudyPage;
