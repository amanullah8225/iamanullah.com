import Head from 'next/head';

import { ResumeViewModel } from 'Utils/resume';

export interface ResumeApplyBuddyProps {
	data: ResumeViewModel;
}

const navy = '#0f1b3d';

const heading = { fontFamily: "'Space Grotesk', ui-sans-serif, sans-serif" };
const body = { fontFamily: "'Inter', ui-sans-serif, sans-serif" };

const SectionTitle = ({ children }: { children: string }) => (
	<h3
		className="mb-3 border-b border-zinc-300 pb-1.5 text-sm font-semibold uppercase tracking-[0.18em]"
		style={{ ...heading, color: navy }}
	>
		{children}
	</h3>
);

const ResumeApplyBuddy = ({ data }: ResumeApplyBuddyProps) => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;1,400&family=Space+Grotesk:wght@500;600;700&display=swap');`}</style>
			</Head>
			<article
				className="mx-auto max-w-[800px] rounded-xl border border-zinc-300 bg-white px-6 py-10 leading-relaxed text-zinc-950 shadow-sm sm:px-10 sm:py-12 print:rounded-none print:border-none print:shadow-none"
				style={body}
			>
				<header
					className="mb-8 border-b-2 pb-5 text-center"
					style={{ borderColor: navy }}
				>
					<p
						className="text-2xl font-bold tracking-tight"
						style={{ ...heading, color: navy }}
					>
						{data.name}
					</p>
					<p className="mt-2 text-sm tracking-wide text-slate-500">
						{data.email} &nbsp;|&nbsp; {data.phone} &nbsp;|&nbsp;{' '}
						{data.locationText}
					</p>
				</header>

				<section className="mb-6">
					<SectionTitle>Professional Summary</SectionTitle>
					<p className="text-sm text-zinc-950">{data.summary}</p>
				</section>

				<section className="mb-6">
					<SectionTitle>Professional Experience</SectionTitle>
					{data.jobs.map((job) => (
						<div
							key={`${job.companyName}-${job.jobTitle}`}
							className="mb-4 last:mb-0"
						>
							<div className="flex flex-wrap items-baseline justify-between gap-x-3">
								<span
									className="text-sm font-semibold text-zinc-950"
									style={heading}
								>
									{job.jobTitle}
								</span>
								<span className="text-sm text-slate-500">{job.dateRange}</span>
							</div>
							<div className="text-sm italic text-slate-500">
								{job.companyName}, {job.location}
							</div>
							<ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm text-zinc-950">
								{job.bullets.map((bullet) => (
									<li key={bullet}>{bullet}</li>
								))}
							</ul>
						</div>
					))}
				</section>

				<section className="mb-6">
					<SectionTitle>Skills</SectionTitle>
					<p className="text-sm leading-relaxed text-zinc-950">
						{data.skills.join(', ')}
					</p>
				</section>

				<section className="mb-6">
					<SectionTitle>Education</SectionTitle>
					{data.education.map((entry) => (
						<div key={entry.course} className="mb-4 last:mb-0">
							<div className="flex flex-wrap items-baseline justify-between gap-x-3">
								<span
									className="text-sm font-semibold text-zinc-950"
									style={heading}
								>
									{entry.course}
								</span>
								<span className="text-sm text-slate-500">
									{entry.dateLabel}
								</span>
							</div>
							<div className="text-sm italic text-slate-500">
								{entry.institute}
							</div>
						</div>
					))}
				</section>
			</article>
		</>
	);
};

export { ResumeApplyBuddy };
