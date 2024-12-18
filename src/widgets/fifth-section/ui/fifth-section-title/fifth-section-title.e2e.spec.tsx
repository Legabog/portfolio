import { test, expect } from '@playwright/test';

test.describe('FifthSectionTitle Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the FifthSectionTitle component', async ({ page }) => {
    const fifthSectionTitle = await page.locator('[data-testid="fifth-section-title"]');
    await expect(fifthSectionTitle).toBeVisible();
  });
});
