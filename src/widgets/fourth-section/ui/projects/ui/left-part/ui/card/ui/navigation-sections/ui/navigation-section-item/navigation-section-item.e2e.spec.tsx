import { test, expect } from '@playwright/test';

import { SECTIONS } from '../../constants';

test.describe('NavigationSectionItem Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  SECTIONS.forEach(({ id }) =>
    test(`should render NavigationSectionItem component wth id: ${id}`, async ({ page }) => {
      const navigationSectionItem = await page.locator(`[data-testid="${id}"]`);
      await expect(navigationSectionItem).toBeVisible();
    }),
  );
});
