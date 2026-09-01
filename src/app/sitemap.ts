import { MetadataRoute } from 'next';

import data, { site_full_url } from '../data/aman_ullah_resume_data';
import { resumeVariants } from '../data/resumeVariants';

// Evaluated once per deploy (module load) so crawlers see a stable value
// rather than a fresh timestamp on every request.
const LAST_MODIFIED = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
	const staticEntries: MetadataRoute.Sitemap = [
		{ url: `${site_full_url}/`, priority: 1.0 },
		{ url: `${site_full_url}/about`, priority: 0.9 },
		{ url: `${site_full_url}/case-studies-projects`, priority: 0.8 },
		{ url: `${site_full_url}/resume`, priority: 0.7 },
		{ url: `${site_full_url}/resume-all`, priority: 0.6 },
	];

	const caseStudyEntries: MetadataRoute.Sitemap = data.projects.map(
		(project) => ({
			url: `${site_full_url}/case-studies/${project.slug}`,
			priority: 0.7,
		})
	);

	const resumeVariantEntries: MetadataRoute.Sitemap = resumeVariants.map(
		(variant) => ({
			url: `${site_full_url}/resume/${variant.slug}`,
			priority: 0.5,
		})
	);

	return [
		...staticEntries,
		...caseStudyEntries,
		...resumeVariantEntries,
	].map((entry) => ({ ...entry, lastModified: LAST_MODIFIED }));
}
