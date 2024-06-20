'use client';

import { FC } from 'react';
import { useLocale } from 'next-intl';
import Spline from '@splinetool/react-spline';

import { useThemeStore } from '@widgets';
import { Locale } from '@locales';
import { SplineWrapper } from './page.styled';

const Home: FC = () => {
  const locale = useLocale() as Locale;
  const { themeType } = useThemeStore();
  const isDarkTheme = themeType === 'dark';
  const conditionSplineScene = `https://prod.spline.design/${isDarkTheme ? (locale === 'ru' ? 'oB2He7F4RYyyx8Z8' : 'IYTSlSqng2fEIZEk') : locale === 'ru' ? 'mkhsyF4Jc5yspLzg' : 'mP8JjpwdEW3Bl9ud'}/scene.splinecode`;

  return (
    <SplineWrapper>
      <Spline scene={ conditionSplineScene } />
    </SplineWrapper>
  );
};
export default Home;
