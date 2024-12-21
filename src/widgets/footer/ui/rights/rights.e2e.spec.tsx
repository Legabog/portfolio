import { test, expect } from '@playwright/test';

test.describe('Rights Components Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the Rights component', async ({ page }) => {
    const rights = await page.locator('[data-testid="footer-rights"]');
    await expect(rights).toBeVisible();
  });
});
