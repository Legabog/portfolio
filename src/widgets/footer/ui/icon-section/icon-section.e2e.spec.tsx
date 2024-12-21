import { test, expect } from '@playwright/test';

test.describe('IconSection Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the IconSection component', async ({ page }) => {
    const iconSection = await page.locator('[data-testid="footer-icon-section"]');
    await expect(iconSection).toBeVisible();
  });
});
