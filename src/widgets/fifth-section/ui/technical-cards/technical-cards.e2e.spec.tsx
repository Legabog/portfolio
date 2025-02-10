import { test, expect } from '@playwright/test';

test.describe('TechnicalCards Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the TechnicalCards component', async ({ page }) => {
    const technicalCards = await page.locator('[data-testid="technical-cards"]');
    await expect(technicalCards).toBeVisible();
  });
});
