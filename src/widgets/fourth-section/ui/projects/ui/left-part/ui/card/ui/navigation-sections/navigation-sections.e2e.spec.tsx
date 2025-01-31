import { test, expect } from '@playwright/test';

test.describe('NavigationSections Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the NavigationSections component', async ({ page }) => {
    const navigationSections = await page.locator('[data-testid="navigation-sections"]');
    await expect(navigationSections).toBeVisible();
  });
});
