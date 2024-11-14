import { test, expect } from '@playwright/test';

import { CARDS } from '../../constants';

test.describe('SecondSectionCard Components Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  CARDS.forEach(({ id }) =>
    test(`should render SecondSectionCard component wth id: ${id}`, async ({ page }) => {
      const secondSectionCard = await page.locator(`[data-testid="second-section-card-${id}"]`);
      await expect(secondSectionCard).toBeVisible();
    }),
  );
});
