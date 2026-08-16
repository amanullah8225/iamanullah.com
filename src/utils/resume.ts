import format from 'date-fns/format';

import data from 'src/data/aman_ullah_resume_data';

export interface ResumeContact {
	label: string;
	href: string;
}

export interface ResumeJob {
	jobTitle: string;
	companyName: string;
	companyUrl: string;
	location: string;
	dateRange: string;
	bullets: string[];
	technologies: string[];
}

export interface ResumeEducationEntry {
	institute: string;
	course: string;
	dateLabel: string;
}

export interface ResumeProject {
	title: string;
	url?: string;
	clientName: string;
	technologies: string[];
}

export interface ResumeViewModel {
	name: string;
	initials: string;
	label: string;
	email: string;
	phone: string;
	locationText: string;
	summary: string;
	profiles: ResumeContact[];
	jobs: ResumeJob[];
	education: ResumeEducationEntry[];
	skills: string[];
	projects: ResumeProject[];
}

const formatDateRange = (startDate: string, endDate: string) => {
	const start = format(new Date(startDate), 'MMM yyyy');
	const end = endDate ? format(new Date(endDate), 'MMM yyyy') : 'Present';
	return `${start} — ${end}`;
};

const getInitials = (name: string) =>
	name
		.split(' ')
		.map((part) => part[0])
		.join('')
		.toUpperCase();

export const getResumeViewModel = (): ResumeViewModel => ({
	name: data.basics.name,
	initials: getInitials(data.basics.name),
	label: data.basics.label,
	email: data.basics.email,
	phone: data.basics.phone,
	locationText: data.basics.location.address,
	summary: data.basics.summary,
	profiles: data.basics.profiles.map((profile) => ({
		label: `${profile.network.toLowerCase()}.com/${
			profile.network === 'GitHub' ? '' : 'in/'
		}${profile.username}`,
		href: profile.url,
	})),
	jobs: data.work.map((job) => ({
		jobTitle: job.jobTitle,
		companyName: job.company.name,
		companyUrl: job.company.url,
		location: job.location,
		dateRange: formatDateRange(job.startDate, job.endDate),
		bullets: job.summary,
		technologies: job.technologies,
	})),
	education: data.education
		.filter((entry) => !entry.hidden)
		.map((entry) => ({
			institute: entry.institute.name,
			course: entry.course,
			dateLabel: format(new Date(entry.date), 'MMM yyyy'),
		})),
	skills: data.textContent.talkAbout,
	projects: data.projects.map((project) => ({
		title: project.title,
		url: project.projectUrl,
		clientName: project.client.name,
		technologies: project.technologies,
	})),
});
