import { test, expect } from '@playwright/test';

test.describe('Header Component Tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('should render the Header component', async ({ page }) => {
		const header = await page.locator('[data-testid="header"]');
		await expect(header).toBeVisible();
	});
});
