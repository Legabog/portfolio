import { test, expect } from '@playwright/test';

test.describe('TypedText Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the TypedText component', async ({ page }) => {
    const typedText = await page.locator('[data-testid="typed-text"]');
    await expect(typedText).toBeVisible();
  });
});
