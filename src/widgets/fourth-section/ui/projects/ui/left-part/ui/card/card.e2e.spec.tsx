import { test, expect } from '@playwright/test';

test.describe('LeftPartCard Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the LeftPartCard component', async ({ page }) => {
    const leftPartCard = await page.locator('[data-testid="left-part-card"]');
    await expect(leftPartCard).toBeVisible();
  });
});
