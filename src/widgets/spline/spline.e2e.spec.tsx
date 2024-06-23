import { test, expect } from '@playwright/test';

test.describe('Spline Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the Spline component', async ({ page }) => {
    const spline = await page.locator('[data-testid="spline"]');
    await expect(spline).toBeVisible();
  });
});
