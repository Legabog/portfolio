import { test, expect } from '@playwright/test';

test.describe('Figure Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the Figure component', async ({ page }) => {
    const figure = await page.locator('[data-testid="figure"]');
    await expect(figure).toBeVisible();
  });
});
