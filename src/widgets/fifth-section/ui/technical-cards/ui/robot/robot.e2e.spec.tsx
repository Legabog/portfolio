import { test, expect } from '@playwright/test';

test.describe('Robot Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the Robot component', async ({ page }) => {
    const robot = await page.locator('[data-testid="robot"]');
    await expect(robot).toBeVisible();
  });
});
