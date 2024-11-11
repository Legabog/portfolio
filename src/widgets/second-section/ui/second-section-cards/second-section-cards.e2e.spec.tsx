import { test, expect } from '@playwright/test';

test.describe('SecondSectionCards Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the SecondSectionCards component', async ({ page }) => {
    const secondSectionCards = await page.locator('[data-testid="second-section-cards"]');
    await expect(secondSectionCards).toBeVisible();
  });
});
