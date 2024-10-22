import { test, expect } from '@playwright/test';

test.describe('Background Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the Background component', async ({ page }) => {
    const background = await page.locator('[data-testid="background"]');
    await expect(background).toBeVisible();
  });
});
