import { test, expect } from '@playwright/test';

import { INFO_ITEMS } from '../../constants';

test.describe('InfoSectionItem Components Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  INFO_ITEMS.forEach(({ id }) =>
    test(`should render InfoSectionItem component wth id: ${id}`, async ({ page }) => {
      const firstInfoSection = await page.locator(`[data-testid="info-section-${id}"]`);
      await expect(firstInfoSection).toBeVisible();
    }),
  );
});
