import Head from 'next/head';

import { ResumeViewModel } from 'Utils/resume';

export interface ResumeSerifProps {
	data: ResumeViewModel;
}

const serif = {
	fontFamily: "Garamond, 'EB Garamond', Georgia, serif",
};

const SectionTitle = ({ children }: { children: string }) => (
	<h2 className="mb-3 border-b border-black pb-1 text-sm font-bold tracking-wide">
		{children}
	</h2>
);

const ResumeSerif = ({ data }: ResumeSerifProps) => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<style>{`@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,700;1,400&display=swap');`}</style>
			</Head>
			<article
				className="mx-auto max-w-3xl bg-white px-8 py-12 text-black sm:px-14"
				style={serif}
			>
				<header className="mb-8 text-center">
					<h1 className="text-2xl font-bold">{data.name.toUpperCase()}</h1>
					<p className="mt-1 text-base">
						{data.locationText} | P: {data.phone} | {data.email}
					</p>
				</header>

				<section className="mb-6">
					<SectionTitle>EXPERIENCE</SectionTitle>
					<ul className="space-y-4">
						{data.jobs.map((job) => (
							<li key={`${job.companyName}-${job.jobTitle}`}>
								<div className="flex flex-wrap justify-between gap-x-4">
									<span className="font-bold">
										{job.companyName}, {job.location}
									</span>
									<span>{job.dateRange}</span>
								</div>
								<div className="italic">{job.jobTitle}</div>
								<ul className="ml-9 mt-1 list-none space-y-1">
									{job.bullets.map((bullet) => (
										<li key={bullet} className="-indent-4 pl-4">
											<span aria-hidden className="mr-1">
												•
											</span>
											{bullet}
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</section>

				<section className="mb-6">
					<SectionTitle>PROJECTS</SectionTitle>
					<ul className="space-y-3">
						{data.projects.map((project) => (
							<li key={project.title}>
								<div className="flex flex-wrap justify-between gap-x-4">
									<span className="font-bold">{project.clientName}</span>
								</div>
								<ul className="ml-9 mt-1 list-none space-y-1">
									<li className="-indent-4 pl-4">
										<span aria-hidden className="mr-1">
											•
										</span>
										{project.title}
									</li>
									<li className="-indent-4 pl-4">
										<span aria-hidden className="mr-1">
											•
										</span>
										Tools: {project.technologies.join(', ')}
									</li>
								</ul>
							</li>
						))}
					</ul>
				</section>

				<section className="mb-6">
					<SectionTitle>ADDITIONAL</SectionTitle>
					<p>
						<span className="font-bold">Technical Skills: </span>
						{data.skills.join(', ')}
					</p>
				</section>

				<section>
					<SectionTitle>EDUCATION</SectionTitle>
					<ul className="space-y-2">
						{data.education.map((entry) => (
							<li key={entry.course}>
								<div className="flex flex-wrap justify-between gap-x-4">
									<span className="font-bold">{entry.institute}</span>
									<span>{entry.dateLabel}</span>
								</div>
								<div className="italic">{entry.course}</div>
							</li>
						))}
					</ul>
				</section>
			</article>
		</>
	);
};

export { ResumeSerif };
