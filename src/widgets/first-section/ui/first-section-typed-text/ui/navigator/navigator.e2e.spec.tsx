import { test, expect } from '@playwright/test';

test.describe('Navigator Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the Navigator component', async ({ page }) => {
    const navigator = await page.locator('[data-testid="navigator"]');
    await expect(navigator).toBeVisible();
  });
});
