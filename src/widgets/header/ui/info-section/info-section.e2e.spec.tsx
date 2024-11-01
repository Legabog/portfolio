import { test, expect } from '@playwright/test';

test.describe('InfoSection Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the InfoSection component', async ({ page }) => {
    const infoSection = await page.locator('[data-testid="info-section"]');
    await expect(infoSection).toBeVisible();
  });
});
