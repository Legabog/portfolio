import { test, expect } from '@playwright/test';

import { TECHNICAL_CARDS } from '../../constants';

test.describe('TechnicalCard Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  TECHNICAL_CARDS.forEach(({ id }) =>
    test(`should render TechnicalCard component wth id: ${id}`, async ({ page }) => {
      const technicalCard = await page.locator(`[data-testid="${id}"]`);
      await expect(technicalCard).toBeVisible();
    }),
  );
});
