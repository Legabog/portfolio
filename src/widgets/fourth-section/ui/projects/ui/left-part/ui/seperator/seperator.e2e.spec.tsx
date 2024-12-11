import { test, expect } from '@playwright/test';

test.describe('LeftPartSeperator Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the LeftPartSeperator component', async ({ page }) => {
    const leftPartSeperator = await page.locator('[data-testid="left-part-seperator"]');
    await expect(leftPartSeperator).toBeVisible();
  });
});
