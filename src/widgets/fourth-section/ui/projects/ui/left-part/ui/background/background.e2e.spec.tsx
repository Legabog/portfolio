import { test, expect } from '@playwright/test';

test.describe('LeftPartBackground Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the LeftPartBackground component', async ({ page }) => {
    const leftPartBackground = await page.locator('[data-testid="left-part-background"]');
    await expect(leftPartBackground).toBeVisible();
  });
});
