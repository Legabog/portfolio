import { test, expect } from '@playwright/test';

test.describe('SecondSection Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the SecondSection component', async ({ page }) => {
    const secondSection = await page.locator('[data-testid="second-section"]');
    await expect(secondSection).toBeVisible();
  });
});
