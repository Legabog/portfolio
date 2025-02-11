import { useLocale } from 'next-intl';

import { useMediaQuery } from '@shared/hooks';
import { useThemeStore } from '@widgets/header';
import { Locale } from '@locales';
import { PLANETS_VARIANTS } from './constants';

export const useLogic = () => {
  const locale = useLocale() as Locale;
  const { themeType } = useThemeStore();
  const isBreakpoint = useMediaQuery(900);

  const conditionSplineScene = `https://prod.spline.design/${PLANETS_VARIANTS[themeType][locale]}/scene.splinecode`;
  const calculatedHeight = `${
    isBreakpoint
      ? window.innerHeight -
        (document.getElementById('first-section-typed-text')?.scrollHeight as number)
      : 0
  }px`;

  return { conditionSplineScene, calculatedHeight };
};
