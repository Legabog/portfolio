'use client';

import { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import { useLocale } from 'next-intl';

import { Loader, ScrollDown } from '@shared/ui';
import { useThemeStore } from '@widgets/header';
import { Locale } from '@locales';
import { Wrapper, ScrollWrapper } from './spline.styled';

const SplineTool = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <Loader />,
});

export const Spline: FC = () => {
  const locale = useLocale() as Locale;
  const { themeType } = useThemeStore();
  const [isLoaded, setIsLoaded] = useState(false);

  const isDarkTheme = themeType === 'dark';
  const conditionSplineScene = `https://prod.spline.design/${isDarkTheme ? (locale === 'ru' ? 'oB2He7F4RYyyx8Z8' : 'IYTSlSqng2fEIZEk') : locale === 'ru' ? 'mkhsyF4Jc5yspLzg' : 'mP8JjpwdEW3Bl9ud'}/scene.splinecode`;

  return (
    <Wrapper data-testid='spline'>
      <SplineTool scene={ conditionSplineScene } onLoad={ () => setIsLoaded(true) } />
      {isLoaded && (
        <ScrollWrapper>
          <ScrollDown />
        </ScrollWrapper>
      )}
    </Wrapper>
  );
};
