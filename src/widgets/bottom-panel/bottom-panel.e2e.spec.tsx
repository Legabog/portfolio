import { test, expect } from '@playwright/test';

test.describe('BottomPanel Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the BottomPanel component', async ({ page }) => {
    const bottomPanel = await page.locator('[data-testid="bottom-panel"]');
    await expect(bottomPanel).toBeVisible();
  });
});
