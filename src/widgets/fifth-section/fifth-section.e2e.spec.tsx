import { test, expect } from '@playwright/test';

test.describe('FifthSection Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the FifthSection component', async ({ page }) => {
    const fifthSection = await page.locator('[data-testid="fifth-section"]');
    await expect(fifthSection).toBeVisible();
  });
});
