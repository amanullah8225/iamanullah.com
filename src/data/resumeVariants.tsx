/* eslint-disable sort-imports */
import { ComponentType } from 'react';

import {
	ResumeApplyBuddy,
	ResumeATS,
	ResumeClassic,
	ResumeDocsStyle,
	ResumeModern,
	ResumeSerif,
} from 'Templates/Resume';
import { ResumeViewModel } from 'Utils/resume';

export interface ResumeVariant {
	slug: string;
	label: string;
	description: string;
	Component: ComponentType<{ data: ResumeViewModel }>;
}

export const resumeVariants: ResumeVariant[] = [
	{
		slug: 'classic',
		label: 'Classic',
		description:
			'Two-column layout with an initials badge, tag-style skills, and a projects sidebar — based on the printable resume template used for the PDF export.',
		Component: ResumeClassic,
	},
	{
		slug: 'applybuddy',
		label: 'ApplyBuddy ATS',
		description:
			'Single-column ATS-friendly card with a bold header rule, uppercase section labels, and a comma-separated skills line.',
		Component: ResumeApplyBuddy,
	},
	{
		slug: 'serif',
		label: 'Serif',
		description:
			'Centered header on a classic serif typeface, underlined section titles, and right-aligned dates.',
		Component: ResumeSerif,
	},
	{
		slug: 'docs',
		label: 'Docs',
		description:
			'Google Docs-style export with a two-column header, horizontal rules between sections, and a teal accent.',
		Component: ResumeDocsStyle,
	},
	{
		slug: 'ats',
		label: 'Minimal ATS',
		description:
			'Plain, ATS-friendly layout on a serif typeface with a navy accent and horizontal rules between sections.',
		Component: ResumeATS,
	},
	{
		slug: 'modern',
		label: 'Modern',
		description:
			'Icon-led contact row, rule-underlined section labels, and a bold sans headline typeface.',
		Component: ResumeModern,
	},
];

export const getResumeVariant = (slug: string) =>
	resumeVariants.find((variant) => variant.slug === slug);
