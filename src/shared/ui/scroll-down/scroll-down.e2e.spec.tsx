import { test, expect } from '@playwright/test';

test.describe('Loader Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the Loader component', async ({ page }) => {
    const loader = await page.locator('[data-testid="scroll-down"]');
    await expect(loader).toBeVisible();
  });
});
