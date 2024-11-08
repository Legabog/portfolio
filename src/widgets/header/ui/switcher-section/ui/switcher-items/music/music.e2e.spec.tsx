import { test, expect } from '@playwright/test';

test.describe('Music Components Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the Music component', async ({ page }) => {
    const music = await page.locator('[data-testid="music"]');
    await expect(music).toBeVisible();
  });
});
