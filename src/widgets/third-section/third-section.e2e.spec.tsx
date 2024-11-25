import { test, expect } from '@playwright/test';

test.describe('ThirdSection Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the ThirdSection component', async ({ page }) => {
    const thirdSection = await page.locator('[data-testid="third-section"]');
    await expect(thirdSection).toBeVisible();
  });
});
