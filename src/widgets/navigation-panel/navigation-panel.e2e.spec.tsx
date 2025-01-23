import { test, expect } from '@playwright/test';

test.describe('NavigationPanel Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the NavigationPanel component', async ({ page }) => {
    const navigationPanel = await page.locator('[data-testid="navigation-panel"]');
    await expect(navigationPanel).toBeVisible();
  });
});
