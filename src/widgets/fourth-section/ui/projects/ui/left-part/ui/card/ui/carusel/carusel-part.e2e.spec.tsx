import { test, expect } from '@playwright/test';

test.describe('Carusel Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the LeftCarusel component', async ({ page }) => {
    const leftCarusel = await page.locator('[data-testid="left-carusel"]');
    await expect(leftCarusel).toBeVisible();
  });
  test('should render the RightCarusel component', async ({ page }) => {
    const rightCarusel = await page.locator('[data-testid="right-carusel"]');
    await expect(rightCarusel).toBeVisible();
  });
});
