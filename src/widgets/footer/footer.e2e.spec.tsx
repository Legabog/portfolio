import { test, expect } from '@playwright/test';

test.describe('Footer Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the Footer component', async ({ page }) => {
    const footer = await page.locator('[data-testid="footer"]');
    await expect(footer).toBeVisible();
  });
});
