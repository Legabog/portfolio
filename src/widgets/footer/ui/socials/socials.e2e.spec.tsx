import { test, expect } from '@playwright/test';

test.describe('Socials Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the Socials component', async ({ page }) => {
    const socials = await page.locator('[data-testid="socials"]');
    await expect(socials).toBeVisible();
  });
});
