// const { withSentryConfig } = require('@sentry/nextjs');
const moduleExports = {
	poweredByHeader: false,
	// assetPrefix: process.env.ASSET_HOST || '',
	productionBrowserSourceMaps: process.env.NODE_ENV === 'production',
	webpack(config, { isServer }) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		if (isServer) {
			config.externals = [
				...(config.externals || []),
				'@sparticuz/chromium',
				'puppeteer-core',
			];
		}

		return config;
	},
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'dev-to-uploads.s3.amazonaws.com' },
			{ protocol: 'https', hostname: 'media.graphcms.com' },
			{ protocol: 'https', hostname: 'media.graphassets.com' },
			{ protocol: 'https', hostname: 'via.placeholder.com' },
			{ protocol: 'https', hostname: 'picsum.photos' },
		],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		qualities: [75, 100],
	},
};

// const sentryWebpackPluginOptions = {
// 	silent: false, // Suppresses all logs
// 	// For all available options, see:
// 	// https://github.com/getsentry/sentry-webpack-plugin#options.
// };

// module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
module.exports = moduleExports;
