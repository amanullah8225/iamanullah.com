/* eslint-disable sort-imports */
import { AnimatePresence } from 'framer-motion';
import { ApolloProvider } from '@apollo/client';
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { client } from 'apollo-client';
import { ThemeProvider } from 'next-themes';

import '../styles/index.css';
import { Layout } from 'Templates/Layout';
import Script from 'next/script';
import { useRouter } from 'next/router';
const GA_MEASUREMENT_ID = 'G-9ZNE7235KL';

// Extend the global window object to include gtag
declare global {
	interface Window {
		gtag: (...args: any[]) => void;
	}
}

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			if (typeof window.gtag === 'function') {
				window.gtag('config', GA_MEASUREMENT_ID, {
					page_path: url,
				});
			}
		};

		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);
	return (
		<ApolloProvider client={client}>
			<ThemeProvider attribute="class">
				<Layout>
					<Script
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
						strategy="afterInteractive"
					/>
					<Script id="gtag-init" strategy="afterInteractive">
						{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
					</Script>
					<AnimatePresence
						mode="wait"
						initial={false}
						onExitComplete={() => window.scrollTo(0, 0)}
					>
						<Component {...pageProps} />
					</AnimatePresence>
				</Layout>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default MyApp;
