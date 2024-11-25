import { test, expect } from '@playwright/test';

test.describe('FourthSection Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the FourthSection component', async ({ page }) => {
    const fourthSection = await page.locator('[data-testid="fourth-section"]');
    await expect(fourthSection).toBeVisible();
  });
});
