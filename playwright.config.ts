import { defineConfig, devices } from '@playwright/test';

require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: './src',
	testMatch: ['**/*.e2e.spec.ts', '**/*.e2e.spec.tsx'],
	webServer: process.env.CI
		? undefined
		: {
				command: `yarn dev`,
				url: process.env.TEST_ENV_BASE_URL,
				timeout: 120 * 1000,
				reuseExistingServer: true,
			},
	use: {
		baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000',
	},
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: 'html',
	/* Configure projects for major browsers */
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},

		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},

		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] },
		},
	],
});
