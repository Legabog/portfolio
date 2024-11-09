import { test, expect } from '@playwright/test';

test.describe('SecondSectionTitle Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the SecondSectionTitle component', async ({ page }) => {
    const secondSectionTitle = await page.locator('[data-testid="second-section-title"]');
    await expect(secondSectionTitle).toBeVisible();
  });
});
