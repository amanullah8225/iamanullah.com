'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import { GA_MEASUREMENT_IDS } from './gtag';

declare global {
	interface Window {
		gtag: (...args: any[]) => void;
	}
}

// Fires a GA `config` hit on every client-side route change. The App Router
// has no `router.events`, so we derive the page path from usePathname +
// useSearchParams instead (must be wrapped in <Suspense> by the caller).
export function Analytics() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (typeof window.gtag !== 'function') return;

		const query = searchParams.toString();
		const pagePath = query ? `${pathname}?${query}` : pathname;

		GA_MEASUREMENT_IDS.forEach((id) => {
			window.gtag('config', id, { page_path: pagePath });
		});
	}, [pathname, searchParams]);

	return null;
}
