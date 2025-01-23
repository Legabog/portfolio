import { test, expect } from '@playwright/test';

test.describe('NavigationPanelButton Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the NavigationPanelButton component', async ({ page }) => {
    const navigationPanelButton = await page.locator('[data-testid="navigation-panel-button"]');
    await expect(navigationPanelButton).toBeVisible();
  });
});
