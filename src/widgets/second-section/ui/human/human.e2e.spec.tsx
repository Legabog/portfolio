import { test, expect } from '@playwright/test';

test.describe('Human Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the Human component', async ({ page }) => {
    const human = await page.locator('[data-testid="human"]');
    await expect(human).toBeVisible();
  });
});
