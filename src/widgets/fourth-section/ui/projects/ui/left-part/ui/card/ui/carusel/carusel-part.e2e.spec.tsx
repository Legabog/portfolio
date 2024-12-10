import { test, expect } from '@playwright/test';

test.describe('LeftPart Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the LeftPart component', async ({ page }) => {
    const leftPart = await page.locator('[data-testid="left-part"]');
    await expect(leftPart).toBeVisible();
  });
});
