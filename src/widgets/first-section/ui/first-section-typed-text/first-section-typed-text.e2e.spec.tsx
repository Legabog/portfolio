import { test, expect } from '@playwright/test';

test.describe('FirstSectionTypedText Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the FirstSectionTypedText component', async ({ page }) => {
    const typedText = await page.locator('[data-testid="first-section-typed-text"]');
    await expect(typedText).toBeVisible();
  });
});
