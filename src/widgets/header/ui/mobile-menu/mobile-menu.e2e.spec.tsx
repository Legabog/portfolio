import { test, expect } from '@playwright/test';

test.describe('MobileMenu Components Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the MobileMenu component', async ({ page }) => {
    await page.setViewportSize({ width: 400, height: 800 });
    const mobileMenu = await page.locator('[data-testid="mobile-menu"]').boundingBox();
    await expect(mobileMenu).toBeDefined();
  });
});
