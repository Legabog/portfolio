import { test, expect } from '@playwright/test';

test.describe('TechnologyPlanet Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the TechnologyPlanet component', async ({ page }) => {
    const spline = await page.locator('[data-testid="technology-planet"]');
    await expect(spline).toBeVisible();
  });
});
