import Head from 'next/head';

import Github from 'public/assets/github.svg';
import Linkedin from 'public/assets/linkedin.svg';

import { ResumeViewModel } from 'Utils/resume';

export interface ResumeModernProps {
	data: ResumeViewModel;
}

const accent = '#4338ca';
const heading = { fontFamily: "'Poppins', ui-sans-serif, sans-serif" };

const MailIcon = () => (
	<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
		<rect
			x="2.5"
			y="4.5"
			width="19"
			height="15"
			rx="2"
			stroke="#dc2626"
			strokeWidth="1.8"
		/>
		<path
			d="M3.5 6l8.5 6.5L20.5 6"
			stroke="#dc2626"
			strokeWidth="1.8"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const PhoneIcon = () => (
	<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
		<rect
			x="6.5"
			y="2.5"
			width="11"
			height="19"
			rx="2.5"
			stroke="#2563eb"
			strokeWidth="1.8"
		/>
		<circle cx="12" cy="18" r="1" fill="#2563eb" />
	</svg>
);

const GlobeIcon = () => (
	<svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
		<circle cx="12" cy="12" r="9.5" stroke="#0891b2" strokeWidth="1.8" />
		<path
			d="M2.5 12h19M12 2.5c2.8 2.6 4.3 6 4.3 9.5s-1.5 6.9-4.3 9.5c-2.8-2.6-4.3-6-4.3-9.5S9.2 5.1 12 2.5z"
			stroke="#0891b2"
			strokeWidth="1.8"
		/>
	</svg>
);

const SectionTitle = ({ children }: { children: string }) => (
	<div className="mt-8 mb-3 flex items-center gap-3 first:mt-0">
		<span
			className="whitespace-nowrap text-sm font-bold uppercase tracking-wide"
			style={{ ...heading, color: accent }}
		>
			{children}
		</span>
		<span className="h-px flex-1 bg-gray-300" />
	</div>
);

const ResumeModern = ({ data }: ResumeModernProps) => {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:ital,wght@0,400;0,500;1,400&display=swap');`}</style>
			</Head>
			<article
				className="mx-auto max-w-3xl bg-white px-8 py-12 text-gray-900 sm:px-14"
				style={{ fontFamily: "'Inter', ui-sans-serif, sans-serif" }}
			>
				<header className="text-center">
					<p
						className="text-2xl font-bold uppercase tracking-[0.25em]"
						style={{ ...heading, color: accent }}
					>
						{data.name}
					</p>
					<div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
						{data.profiles.map((profile) => (
							<span key={profile.href} className="flex items-center gap-1.5">
								{profile.label.includes('github') ? (
									<Github className="h-3.5 w-3.5 text-[#4338ca]" />
								) : (
									<Linkedin className="h-3.5 w-3.5 text-[#0a66c2]" />
								)}
								<a href={profile.href} target="_blank" rel="noreferrer">
									{profile.label}
								</a>
							</span>
						))}
						<span className="flex items-center gap-1.5">
							<PhoneIcon />
							{data.phone}
						</span>
						<span className="flex items-center gap-1.5">
							<MailIcon />
							{data.email}
						</span>
						<span className="flex items-center gap-1.5">
							<GlobeIcon />
							{data.locationText}
						</span>
					</div>
				</header>

				<SectionTitle>Summary</SectionTitle>
				<p className="text-sm leading-relaxed">{data.summary}</p>

				<SectionTitle>Skills</SectionTitle>
				<p className="text-sm leading-relaxed">
					<span style={{ color: accent }}>•</span> {data.skills.join(' | ')}
				</p>

				<SectionTitle>Experience</SectionTitle>
				<div className="space-y-5">
					{data.jobs.map((job) => (
						<div key={`${job.companyName}-${job.jobTitle}`}>
							<div className="flex flex-wrap items-baseline justify-between gap-x-3">
								<span
									className="text-sm font-semibold"
									style={{ ...heading, color: accent }}
								>
									{job.jobTitle}
								</span>
								<span className="text-sm text-gray-500">{job.dateRange}</span>
							</div>
							<p className="text-sm italic text-gray-600">
								{job.companyName}, {job.location}
							</p>
							<ul className="mt-1.5 ml-5 list-disc space-y-1 text-sm">
								{job.bullets.map((bullet) => (
									<li key={bullet}>{bullet}</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<SectionTitle>Education</SectionTitle>
				<div className="space-y-3">
					{data.education.map((entry) => (
						<div key={entry.course}>
							<div className="flex flex-wrap items-baseline justify-between gap-x-3">
								<span
									className="text-sm font-semibold"
									style={{ ...heading, color: accent }}
								>
									{entry.course}
								</span>
								<span className="text-sm text-gray-500">{entry.dateLabel}</span>
							</div>
							<p className="text-sm italic text-gray-600">{entry.institute}</p>
						</div>
					))}
				</div>
			</article>
		</>
	);
};

export { ResumeModern };
