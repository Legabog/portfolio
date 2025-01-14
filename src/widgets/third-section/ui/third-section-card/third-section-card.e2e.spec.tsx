import { test, expect } from '@playwright/test';

test.describe('ThirdSectionCard Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the ThirdSectionCard component', async ({ page }) => {
    const thirdSectionCard = await page.locator('[data-testid="third-section-card"]');
    await expect(thirdSectionCard).toBeVisible();
  });
});
