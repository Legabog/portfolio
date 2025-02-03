import { test, expect } from '@playwright/test';

test.describe('CommonScrollSection Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the CommonScrollSection component', async ({ page }) => {
    const commonScrollSection = await page.locator('[data-testid="common-scroll-section"]');
    await expect(commonScrollSection).toBeVisible();
  });
});
