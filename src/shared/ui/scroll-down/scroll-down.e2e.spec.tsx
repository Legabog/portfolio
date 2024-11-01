import { test, expect } from '@playwright/test';

test.describe('ScrollDown Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the ScrollDown component', async ({ page }) => {
    const scrollDown = await page.locator('[data-testid="scroll-down"]');
    await expect(scrollDown).toBeVisible();
  });
});
