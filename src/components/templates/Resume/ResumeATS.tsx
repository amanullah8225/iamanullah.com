import Head from 'next/head';

import { ResumeViewModel } from 'Utils/resume';

export interface ResumeATSProps {
	data: ResumeViewModel;
}

const navy = '#1f3864';
const lora = { fontFamily: "'Lora', Georgia, serif" };

const SectionTitle = ({ children }: { children: string }) => (
	<>
		<p
			className="pb-1 pt-3 text-[13pt] font-bold"
			style={{ ...lora, color: navy }}
		>
			{children}
		</p>
		<hr className="border-t border-black" />
	</>
);

const ResumeATS = ({ data }: ResumeATSProps) => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<style>{`@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap');`}</style>
			</Head>
			<article
				className="mx-auto max-w-3xl bg-white px-8 py-12 text-black sm:px-14"
				style={lora}
			>
				<header className="pb-1 text-center">
					<p className="text-[20pt] font-bold" style={{ ...lora, color: navy }}>
						{data.name}
					</p>
					<p className="pb-3 text-[11pt]">
						{data.locationText} &nbsp;|&nbsp; {data.email} &nbsp;|&nbsp;{' '}
						{data.phone}
						{data.profiles.map((profile) => (
							<span key={profile.href}>
								{' '}
								&nbsp;|&nbsp;{' '}
								<a href={profile.href} target="_blank" rel="noreferrer">
									{profile.label}
								</a>
							</span>
						))}
					</p>
				</header>
				<hr className="border-t border-black" />

				<SectionTitle>SUMMARY</SectionTitle>
				<p className="py-3 text-[11pt] leading-relaxed">{data.summary}</p>

				<SectionTitle>EXPERIENCE</SectionTitle>
				<div className="space-y-3 py-3">
					{data.jobs.map((job) => (
						<div key={`${job.companyName}-${job.jobTitle}`}>
							<p
								className="text-[11pt] font-bold"
								style={{ ...lora, color: navy }}
							>
								{job.jobTitle}
							</p>
							<p className="pb-1.5 text-[11pt]">
								<span className="italic">
									{job.companyName} — {job.location}
								</span>
								&nbsp;&nbsp;&nbsp; {job.dateRange}
							</p>
							<ul className="ml-6 list-disc space-y-1 text-[11pt]">
								{job.bullets.map((bullet) => (
									<li key={bullet}>{bullet}</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<SectionTitle>EDUCATION</SectionTitle>
				<div className="space-y-2 py-3">
					{data.education.map((entry) => (
						<div key={entry.course}>
							<p
								className="text-[11pt] font-bold"
								style={{ ...lora, color: navy }}
							>
								{entry.course}
							</p>
							<p className="text-[11pt]">
								{entry.institute} | {entry.dateLabel}
							</p>
						</div>
					))}
				</div>

				<SectionTitle>SKILLS</SectionTitle>
				<p className="py-3 text-[11pt]">{data.skills.join(', ')}</p>
			</article>
		</>
	);
};

export { ResumeATS };
