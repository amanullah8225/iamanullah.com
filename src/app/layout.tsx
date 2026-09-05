import { Metadata } from 'next';
import { ReactNode } from 'react';
import Script from 'next/script';

import '../styles/index.css';
import { Layout } from 'Templates/Layout';
import data, { site_full_url } from '../data/aman_ullah_resume_data';

import { Providers } from './providers';

const OG_IMAGE = 'https://iamanullah.com/assets/aman-ullah-og.jpg';

// Google Analytics 4 — single measurement ID for iamanullah.com, loaded once
// here in the root layout. GA4 tracks client-side route changes automatically
// via History API events, so no per-route tracking component is needed.
//
// NOTE: this Google tag currently forwards to GA4 properties that have been
// deleted, so no data lands yet. To start collection, create a fresh GA4 web
// data stream for iamanullah.com and replace the ID below with its G-XXXXXXXXXX.
const GA_MEASUREMENT_ID = 'G-W9304M5RCW';

export const metadata: Metadata = {
	metadataBase: new URL(site_full_url),
	title: {
		default: data.textContent.homePage.title,
		template: `%s | ${data.basics.name}`,
	},
	description: data.textContent.homePage.description,
	keywords: data.textContent.homePage.keywords,
	authors: [{ name: data.basics.name, url: site_full_url }],
	creator: data.basics.name,
	alternates: { canonical: '/' },
	openGraph: {
		type: 'website',
		url: site_full_url,
		siteName: data.basics.name,
		title: data.textContent.homePage.title,
		description: data.textContent.homePage.description,
		images: [{ url: OG_IMAGE }],
	},
	twitter: {
		card: 'summary_large_image',
		title: data.textContent.homePage.title,
		description: data.textContent.homePage.description,
		creator: data.basics.name,
		images: [OG_IMAGE],
	},
	icons: { shortcut: '/assets/favicon_light.svg' },
};

const websiteJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: 'iamanullah.com',
	alternateName: data.basics.name,
	url: site_full_url + '/',
	description: data.textContent.homePage.description,
	image: OG_IMAGE,
};

const personJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: data.basics.name,
	url: site_full_url + '/',
	image: OG_IMAGE,
	jobTitle: data.basics.label,
	description: data.basics.summary,
	address: {
		'@type': 'PostalAddress',
		addressLocality: data.basics.location.address,
		addressCountry: data.basics.location.countryCode,
	},
	sameAs: data.basics.profiles.map((profile) => profile.url),
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en-GB">
			<body className="antialiased bg-grey-200 text-off-black dark:bg-off-black dark:text-off-white print:bg-white print:text-off-black">
				<Providers>
					<Layout>{children}</Layout>
				</Providers>

				{/* Google tag (gtag.js) */}
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
					strategy="afterInteractive"
				/>
				<Script id="gtag-init" strategy="afterInteractive">
					{[
						'window.dataLayer = window.dataLayer || [];',
						'function gtag(){dataLayer.push(arguments);}',
						"gtag('js', new Date());",
						`gtag('config', '${GA_MEASUREMENT_ID}');`,
					].join('\n')}
				</Script>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
				/>
			</body>
		</html>
	);
}
