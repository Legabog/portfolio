import { test, expect } from '@playwright/test';

test.describe('FourthSectionTitle Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the FourthSectionTitle component', async ({ page }) => {
    const fourthSectionTitle = await page.locator('[data-testid="fourth-section-title"]');
    await expect(fourthSectionTitle).toBeVisible();
  });
});
