import { ResumeViewModel } from 'Utils/resume';

export interface ResumeClassicProps {
	data: ResumeViewModel;
}

const ResumeClassic = ({ data }: ResumeClassicProps) => {
	return (
		<div className="mx-auto max-w-4xl bg-gray-100 p-8 text-gray-800 sm:p-12 print:bg-white">
			<header className="mb-8 flex items-center">
				<div className="mr-5 bg-gray-700 px-3 py-3 text-center text-base font-medium leading-none text-white print:bg-black">
					{data.initials.split('').map((letter) => (
						<div key={letter}>{letter}</div>
					))}
				</div>
				<div>
					<h1 className="pb-px text-2xl font-semibold text-gray-800">
						{data.name}
					</h1>
					<p className="text-base leading-normal text-gray-600">{data.label}</p>
				</div>
			</header>

			<p className="mb-10 leading-relaxed text-gray-700">{data.summary}</p>

			<div className="grid gap-x-10 gap-y-10 sm:grid-cols-[240px_1fr]">
				<aside className="space-y-10">
					<section>
						<h2 className="mb-4 text-sm font-bold tracking-widest text-gray-500 print:font-normal">
							SKILLS
						</h2>
						<ul className="flex flex-wrap gap-2 text-sm leading-relaxed">
							{data.skills.map((skill) => (
								<li
									key={skill}
									className="bg-gray-200 px-2.5 py-0.5 text-gray-800 print:border print:border-gray-300 print:bg-white"
								>
									{skill}
								</li>
							))}
						</ul>
					</section>

					<section>
						<h2 className="mb-4 text-sm font-bold tracking-widest text-gray-500 print:font-normal">
							CONTACT
						</h2>
						<ul className="space-y-1.5 leading-normal text-gray-700">
							<li>
								<a href={`mailto:${data.email}`}>{data.email}</a>
							</li>
							<li>
								<a href={`tel:${data.phone}`}>{data.phone}</a>
							</li>
							<li>{data.locationText}</li>
							{data.profiles.map((profile) => (
								<li key={profile.href}>
									<a href={profile.href} target="_blank" rel="noreferrer">
										{profile.label}
									</a>
								</li>
							))}
						</ul>
					</section>

					<section>
						<h2 className="mb-4 text-sm font-bold tracking-widest text-gray-500 print:font-normal">
							EDUCATION
						</h2>
						<ul className="space-y-4">
							{data.education.map((entry) => (
								<li key={entry.course}>
									<h3 className="font-semibold leading-snug text-gray-800">
										{entry.institute}
									</h3>
									<p className="text-sm leading-normal text-gray-600">
										{entry.course}
									</p>
								</li>
							))}
						</ul>
					</section>
				</aside>

				<main className="space-y-10">
					<section>
						<h2 className="mb-4 text-sm font-bold tracking-widest text-gray-500 print:font-normal">
							EXPERIENCE
						</h2>
						<ul className="space-y-6">
							{data.jobs.map((job) => (
								<li
									key={`${job.companyName}-${job.jobTitle}`}
									className="break-inside-avoid"
								>
									<h3 className="text-lg font-semibold leading-snug text-gray-800">
										{job.companyName}
									</h3>
									<p className="leading-normal text-gray-600">
										{job.dateRange} | {job.location} | {job.jobTitle}
									</p>
									<ul className="mt-2 ml-4 list-disc space-y-1.5 leading-relaxed text-gray-700">
										{job.bullets.map((bullet) => (
											<li key={bullet}>{bullet}</li>
										))}
									</ul>
								</li>
							))}
						</ul>
					</section>

					<section>
						<h2 className="mb-4 text-sm font-bold tracking-widest text-gray-500 print:font-normal">
							SELECTED PROJECTS
						</h2>
						<ul className="space-y-3">
							{data.projects.map((project) => (
								<li key={project.title}>
									<h3 className="font-semibold leading-snug text-gray-800">
										{project.url ? (
											<a href={project.url} target="_blank" rel="noreferrer">
												{project.clientName}
											</a>
										) : (
											project.clientName
										)}
									</h3>
									<p className="text-sm leading-normal text-gray-600">
										{project.title} — {project.technologies.join(', ')}
									</p>
								</li>
							))}
						</ul>
					</section>
				</main>
			</div>
		</div>
	);
};

export { ResumeClassic };
