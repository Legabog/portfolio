import { test, expect } from '@playwright/test';

test.describe('SectionTitle Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the SectionTitle component', async ({ page }) => {
    const sectionTitle = await page.locator('[data-testid="section-title"]');
    await expect(sectionTitle).toBeVisible();
  });
});
