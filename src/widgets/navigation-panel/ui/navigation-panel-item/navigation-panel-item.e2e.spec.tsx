import { test, expect } from '@playwright/test';

import { PANEL_ITEMS } from '../../constants';

test.describe('NavigationPanelItem Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  PANEL_ITEMS.forEach(({ id }) =>
    test(`should render NavigationPanelItem component wth id: ${id}`, async ({ page }) => {
      const navigationPanelItem = await page.locator(`[data-testid="navigation-${id}"]`);
      await expect(navigationPanelItem).toBeVisible();
    }),
  );
});
