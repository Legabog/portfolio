import { test, expect } from '@playwright/test';

test.describe('Projects Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the ProjectsElement component', async ({ page }) => {
    const projects = await page.locator('[data-testid="projects"]');
    await expect(projects).toBeVisible();
  });
});
