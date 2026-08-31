/* eslint-disable sort-imports */
import { GetServerSideProps } from 'next';

import data, { site_full_url } from '../data/aman_ullah_resume_data';
import { resumeVariants } from '../data/resumeVariants';

// Evaluated once per deploy (module load), so crawlers see a stable value
// rather than a fresh timestamp on every request.
const LAST_MODIFIED = new Date().toISOString();

interface SitemapEntry {
	path: string;
	priority: number;
}

const buildEntries = (): SitemapEntry[] => [
	{ path: '/', priority: 1.0 },
	{ path: '/about', priority: 0.9 },
	{ path: '/case-studies-projects', priority: 0.8 },
	{ path: '/resume', priority: 0.7 },
	{ path: '/resume-all', priority: 0.6 },
	...data.projects.map((project) => ({
		path: `/case-studies/${project.slug}`,
		priority: 0.7,
	})),
	...resumeVariants.map((variant) => ({
		path: `/resume/${variant.slug}`,
		priority: 0.5,
	})),
];

const generateSitemap = (): string => {
	const urls = buildEntries()
		.map(
			({ path, priority }) => `  <url>
    <loc>${site_full_url}${path}</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
    <priority>${priority.toFixed(2)}</priority>
  </url>`
		)
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
};

// The sitemap is emitted directly from getServerSideProps; this component never renders.
const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	res.setHeader('Content-Type', 'application/xml; charset=utf-8');
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=86400, stale-while-revalidate=43200'
	);
	res.write(generateSitemap());
	res.end();

	return { props: {} };
};

export default Sitemap;
