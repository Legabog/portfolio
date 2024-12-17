import { test, expect } from '@playwright/test';

test.describe('ProjectSection Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render the ProjectSection component', async ({ page }) => {
    const projectSection = await page.locator('[data-testid="project-section"]');
    await expect(projectSection).toBeVisible();
  });
});
