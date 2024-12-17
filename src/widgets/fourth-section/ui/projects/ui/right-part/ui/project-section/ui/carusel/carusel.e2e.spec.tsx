import { test, expect } from '@playwright/test';

test.describe('Carusel Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  ['left', 'right'].map((type) =>
    test(`should render the ${type} Carusel component`, async ({ page }) => {
      const carusel = await page.locator(`[data-testid="project-section-${type}-carusel"]`);
      await expect(carusel).toBeVisible();
    }),
  );
});
