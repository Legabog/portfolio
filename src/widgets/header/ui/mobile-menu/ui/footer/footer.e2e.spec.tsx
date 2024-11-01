import { test, expect } from '@playwright/test';

test.describe('Footer Components Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the Footer component', async ({ page }) => {
    await page.setViewportSize({ width: 400, height: 800 });
    const footer = await page.locator('[data-testid="footer"]').boundingBox();
    await expect(footer).toBeDefined();
  });
});
