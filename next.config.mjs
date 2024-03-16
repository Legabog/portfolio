import { withSentryConfig } from '@sentry/nextjs';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ['three'],
	// webpack(config, { isServer }) {
  //   if (!isServer) {
  //     // We're in the browser build, so we can safely exclude the sharp module
  //     config.externals.push('sharp')
  //   }
  //   // audio support
  //   config.module.rules.push({
  //     test: /\.(ogg|mp3|wav|mpe?g)$/i,
  //     exclude: config.exclude,
  //     use: [
  //       {
  //         loader: require.resolve('url-loader'),
  //         options: {
  //           limit: config.inlineImageLimit,
  //           fallback: require.resolve('file-loader'),
  //           publicPath: `${config.assetPrefix}/_next/static/images/`,
  //           outputPath: `${isServer ? '../' : ''}static/images/`,
  //           name: '[name]-[hash].[ext]',
  //           esModule: config.esModule || false,
  //         },
  //       },
  //     ],
  //   })

  //   // shader support
  //   config.module.rules.push({
  //     test: /\.(glsl|vs|fs|vert|frag)$/,
  //     exclude: /node_modules/,
  //     use: ['raw-loader', 'glslify-loader'],
  //   })
	// }
};

// const KEYS_TO_OMIT = ['webpackDevMiddleware', 'configOrigin', 'target', 'analyticsId', 'webpack5', 'amp', 'assetPrefix']
// const finalConfig = {}
//   Object.keys(nextConfig).forEach((key) => {
//     if (!KEYS_TO_OMIT.includes(key)) {
//       finalConfig[key] = nextConfig[key]
//     }
//   })

export default withSentryConfig(
	withNextIntl(nextConfig),
	{
		// For all available options, see:
		// https://github.com/getsentry/sentry-webpack-plugin#options

		// Suppresses source map uploading logs during build
		silent: true,
		org: 'myorg-1i',
		project: 'cv',
	},
	{
		// For all available options, see:
		// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

		// Upload a larger set of source maps for prettier stack traces (increases build time)
		widenClientFileUpload: true,

		// Transpiles SDK to be compatible with IE11 (increases bundle size)
		transpileClientSDK: true,

		// Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers. (increases server load)
		// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
		// side errors will fail.
		tunnelRoute: '/monitoring',

		// Hides source maps from generated client bundles
		hideSourceMaps: true,

		// Automatically tree-shake Sentry logger statements to reduce bundle size
		disableLogger: true,

		// Enables automatic instrumentation of Vercel Cron Monitors.
		// See the following for more information:
		// https://docs.sentry.io/product/crons/
		// https://vercel.com/docs/cron-jobs
		automaticVercelMonitors: true,
	},
);
