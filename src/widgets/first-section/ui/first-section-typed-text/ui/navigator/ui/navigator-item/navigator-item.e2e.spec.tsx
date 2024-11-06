import { test, expect } from '@playwright/test';

import { NAVIGATOR_ITEMS } from '../../constants';

test.describe('NavigatorItem Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  NAVIGATOR_ITEMS.forEach(({ id }) =>
    test(`should render NavigatorItem component wth id: ${id}`, async ({ page }) => {
      const navigatorItem = await page.locator(`[data-testid="navigator-item-${id}"]`);
      await expect(navigatorItem).toBeVisible();
    }),
  );
});
