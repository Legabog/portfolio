import { test, expect } from '@playwright/test';

test.describe('Language Components Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the Language component', async ({ page }) => {
    const language = await page.locator('[data-testid="language"]');
    await expect(language).toBeVisible();
  });
});
