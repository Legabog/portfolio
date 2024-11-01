import { test, expect } from '@playwright/test';

test.describe('SwitcherSection Components Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  test('should render the SwitcherSection component', async ({ page }) => {
    const switcherSection = await page.locator('[data-testid="switcher-section"]');
    await expect(switcherSection).toBeVisible();
  });
});
