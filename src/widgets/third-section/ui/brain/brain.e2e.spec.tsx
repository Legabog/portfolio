import { test, expect } from '@playwright/test';

test.describe('Brain Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the Brain component', async ({ page }) => {
    const brain = await page.locator('[data-testid="brain"]');
    await expect(brain).toBeVisible();
  });
});
