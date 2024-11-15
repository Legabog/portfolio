import { test, expect } from '@playwright/test';

test.describe('ThirdSectionTitle Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the ThirdSectionTitle component', async ({ page }) => {
    const thirdSectionTitle = await page.locator('[data-testid="third-section-title"]');
    await expect(thirdSectionTitle).toBeVisible();
  });
});
