import { test, expect } from '@playwright/test';

test.describe('RightPart Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the RightPart component', async ({ page }) => {
    const rightPart = await page.locator('[data-testid="right-part"]');
    await expect(rightPart).toBeVisible();
  });
});
