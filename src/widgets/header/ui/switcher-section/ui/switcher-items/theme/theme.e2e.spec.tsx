import { test, expect } from '@playwright/test';

test.describe('Theme Components Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the Theme component', async ({ page }) => {
    const theme = await page.locator('[data-testid="theme"]');
    await expect(theme).toBeVisible();
  });
});
