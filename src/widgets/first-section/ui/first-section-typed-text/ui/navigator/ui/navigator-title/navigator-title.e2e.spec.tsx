import { test, expect } from '@playwright/test';

import { NAVIGATOR_TITLES } from '../../constants';

test.describe('NavigatorTitle Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  NAVIGATOR_TITLES.forEach(({ id }) =>
    test(`should render NavigatorTitle component wth id: ${id}`, async ({ page }) => {
      const navigatorTitle = await page.locator(`[data-testid="navigator-title-${id}"]`);
      await expect(navigatorTitle).toBeVisible();
    }),
  );
});
