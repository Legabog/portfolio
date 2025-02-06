import { test, expect } from '@playwright/test';

test.describe('NavigationPanelButton Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the top NavigationPanelButton component', async ({ page }) => {
    const navigationPanelTopButton = await page.locator(
      '[data-testid="navigation-panel-top-button"]',
    );
    await expect(navigationPanelTopButton).toBeVisible();
  });
  test('should render the bottom NavigationPanelButton component', async ({ page }) => {
    const navigationPanelBottomButton = await page.locator(
      '[data-testid="navigation-panel-bottom-button"]',
    );
    await expect(navigationPanelBottomButton).toBeVisible();
  });
});
