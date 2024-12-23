import { test, expect } from '@playwright/test';

import { SOCIALS_ITEMS } from '../../constants';

test.describe('SocialItem Components Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  SOCIALS_ITEMS.forEach(({ id }) =>
    test(`should render SocialItem component wth id: ${id}`, async ({ page }) => {
      const socialItem = await page.locator(`[data-testid="social-${id}"]`);
      await expect(socialItem).toBeVisible();
    }),
  );
});
