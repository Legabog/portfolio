import { test, expect } from '@playwright/test';

test.describe('NavigateButton Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the NavigateButton component', async ({ page }) => {
    const navigateButton = await page.locator('[data-testid="navigate-button"]');
    await expect(navigateButton).toBeVisible();
  });
});
