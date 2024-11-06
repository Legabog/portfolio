import { test, expect } from '@playwright/test';

test.describe('FirstSection Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the FirstSection component', async ({ page }) => {
    const firstSection = await page.locator('[data-testid="first-section"]');
    await expect(firstSection).toBeVisible();
  });
});
