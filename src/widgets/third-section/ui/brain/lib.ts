import { useLocale } from 'next-intl';

import { useMediaQuery } from '@shared/hooks';
import { useThemeStore } from '@widgets/header';
import { Locale } from '@locales';
import { BRAIN_VARIANTS } from './constants';

export const useLogic = () => {
  const locale = useLocale() as Locale;
  const { themeType } = useThemeStore();
  const isBreakpoint = useMediaQuery(900);

  const isMobile = isBreakpoint ? 'mobile' : 'desktop';
  const conditionSplineScene = `https://prod.spline.design/${BRAIN_VARIANTS[isMobile][themeType][locale]}/scene.splinecode`;

  return { conditionSplineScene };
};
