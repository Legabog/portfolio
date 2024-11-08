'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useLocale } from 'next-intl';

import { useMediaQuery } from '@shared/hooks';
import { Loader } from '@shared/ui';
import { useThemeStore } from '@widgets/header';
import { Locale } from '@locales';
import { Wrapper } from './technology-planet.styled';
import { PLANETS_VARIANTS } from './constants';

const SplineTool = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <Loader />,
});

export const TechnologyPlanet: FC = () => {
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

  return (
    <Wrapper $calculatedHeight={ calculatedHeight } data-testid='technology-planet'>
      <SplineTool scene={ conditionSplineScene } />
    </Wrapper>
  );
};
