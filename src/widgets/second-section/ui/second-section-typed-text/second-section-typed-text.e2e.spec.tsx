import { test, expect } from '@playwright/test';

test.describe('SecondSectionTypedText Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the SecondSectionTypedText component', async ({ page }) => {
    const secondSectionTypedText = await page.locator('[data-testid="second-section-typed-text"]');
    await expect(secondSectionTypedText).toBeVisible();
  });
});
