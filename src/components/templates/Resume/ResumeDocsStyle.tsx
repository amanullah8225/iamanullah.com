import Head from 'next/head';

import { ResumeViewModel } from 'Utils/resume';

export interface ResumeDocsStyleProps {
	data: ResumeViewModel;
}

const teal = '#008073';
const roboto = { fontFamily: "'Roboto', ui-sans-serif, sans-serif" };

const SectionTitle = ({ children }: { children: string }) => (
	<h2
		className="mb-3 pt-4 text-base font-medium uppercase tracking-wide"
		style={{ color: teal }}
	>
		{children}
	</h2>
);

const ResumeDocsStyle = ({ data }: ResumeDocsStyleProps) => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<style>{`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');`}</style>
			</Head>
			<article
				className="mx-auto max-w-3xl bg-white px-8 py-10 text-[#333333] sm:px-12"
				style={roboto}
			>
				<header className="flex flex-wrap items-start justify-between gap-6 pb-6">
					<div>
						<p className="text-3xl font-light text-[#333333]">{data.name}</p>
						<p className="mt-2 max-w-md text-sm leading-relaxed text-[#333333]">
							{data.summary}
						</p>
					</div>
					<div className="text-right text-sm">
						<p>
							<a href={`mailto:${data.email}`} style={{ color: teal }}>
								{data.email}
							</a>
						</p>
						<p>{data.phone}</p>
						<p>{data.locationText}</p>
						{data.profiles.map((profile) => (
							<p key={profile.href}>
								<a
									href={profile.href}
									target="_blank"
									rel="noreferrer"
									style={{ color: teal }}
								>
									{profile.label}
								</a>
							</p>
						))}
					</div>
				</header>
				<hr className="border-t border-[#cccccc]" />

				<section>
					<SectionTitle>Experience</SectionTitle>
					<ul className="space-y-5">
						{data.jobs.map((job) => (
							<li key={`${job.companyName}-${job.jobTitle}`}>
								<h3 className="text-sm font-bold text-[#333333]">
									{job.companyName}, {job.location} — {job.jobTitle}
								</h3>
								<p className="text-xs text-[#434343]">
									{job.dateRange.toUpperCase()}
								</p>
								<ul className="mt-1.5 ml-5 list-disc space-y-1 text-sm text-[#333333]">
									{job.bullets.map((bullet) => (
										<li key={bullet}>{bullet}</li>
									))}
									<li>
										<span className="font-bold">Tools</span>:{' '}
										{job.technologies.join(', ')}.
									</li>
								</ul>
							</li>
						))}
					</ul>
				</section>
				<hr className="mt-6 border-t border-[#cccccc]" />

				<section>
					<SectionTitle>Education</SectionTitle>
					<ul className="space-y-3">
						{data.education.map((entry) => (
							<li key={entry.course}>
								<h3 className="text-sm font-bold text-[#333333]">
									{entry.institute} — {entry.course}
								</h3>
								<p className="text-xs text-[#434343]">{entry.dateLabel}</p>
							</li>
						))}
					</ul>
				</section>
				<hr className="mt-6 border-t border-[#cccccc]" />

				<section>
					<SectionTitle>Projects</SectionTitle>
					<ul className="space-y-3">
						{data.projects.map((project) => (
							<li key={project.title}>
								<h3 className="text-sm font-bold text-[#333333]">
									{project.url ? (
										<a href={project.url} target="_blank" rel="noreferrer">
											{project.clientName}
										</a>
									) : (
										project.clientName
									)}{' '}
									&mdash; {project.title}
								</h3>
								<p className="text-sm text-[#333333]">
									<span className="font-bold">Tools</span>:{' '}
									{project.technologies.join(', ')}.
								</p>
							</li>
						))}
					</ul>
				</section>
				<hr className="mt-6 border-t border-[#cccccc]" />

				<section>
					<SectionTitle>Skills</SectionTitle>
					<p className="text-sm text-[#333333]">{data.skills.join(', ')}</p>
				</section>
			</article>
		</>
	);
};

export { ResumeDocsStyle };
