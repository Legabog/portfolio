'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useLocale } from 'next-intl';

import { useMediaQuery } from '@shared/hooks';
import { Loader } from '@shared/ui';
import { useThemeStore } from '@widgets/header';
import { Locale } from '@locales';
import { Wrapper } from './brain.styled';
import { BRAIN_VARIANTS } from './constants';

const SplineTool = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <Loader />,
});

export const Brain: FC = () => {
  const locale = useLocale() as Locale;
  const { themeType } = useThemeStore();
  const isBreakpoint = useMediaQuery(900);

  const isMobile = isBreakpoint ? 'mobile' : 'desktop';
  const conditionSplineScene = `https://prod.spline.design/${BRAIN_VARIANTS[isMobile][themeType][locale]}/scene.splinecode`;
  const calculatedHeight = `${
    isBreakpoint
      ? window.innerHeight -
        (document.getElementById('first-section-typed-text')?.scrollHeight as number)
      : window.innerHeight -
        (document.getElementById('third-section-title')?.scrollHeight as number) -
        120
  }px`;

  return (
    <Wrapper $calculatedHeight={ calculatedHeight } data-testid='brain'>
      <SplineTool scene={ conditionSplineScene } />
    </Wrapper>
  );
};
