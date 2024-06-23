'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useLocale } from 'next-intl';

import { Loader } from '@shared/ui';
import { useThemeStore } from '@widgets/header';
import { Locale } from '@locales';
import { SplineWrapper } from './spline.styled';

const SplineTool = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <Loader />,
});

export const Spline: FC = () => {
  const locale = useLocale() as Locale;
  const { themeType } = useThemeStore();
  const isDarkTheme = themeType === 'dark';
  const conditionSplineScene = `https://prod.spline.design/${isDarkTheme ? (locale === 'ru' ? 'oB2He7F4RYyyx8Z8' : 'IYTSlSqng2fEIZEk') : locale === 'ru' ? 'mkhsyF4Jc5yspLzg' : 'mP8JjpwdEW3Bl9ud'}/scene.splinecode`;

  return (
    <SplineWrapper data-testid='spline'>
      <SplineTool scene={ conditionSplineScene } />
    </SplineWrapper>
  );
};
