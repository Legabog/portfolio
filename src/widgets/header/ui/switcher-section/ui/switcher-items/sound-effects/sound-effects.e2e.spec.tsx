import { test, expect } from '@playwright/test';

test.describe('SoundEffects Components Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the SoundEffects component', async ({ page }) => {
    const soundEffects = await page.locator('[data-testid="sound-effects"]');
    await expect(soundEffects).toBeVisible();
  });
});
