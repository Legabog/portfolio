'use client';

import { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import { useLocale } from 'next-intl';

import { Loader, ScrollDown } from '@shared/ui';
import { useThemeStore } from '@widgets/header';
import { Locale } from '@locales';
import { Wrapper, ScrollWrapper } from './technology-planet.styled';

const SplineTool = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <Loader />,
});

export const TechnologyPlanet: FC = () => {
  const locale = useLocale() as Locale;
  const { themeType } = useThemeStore();
  const [isLoaded, setIsLoaded] = useState(false);

  const isDarkTheme = themeType === 'dark';
  const conditionSplineScene = `https://prod.spline.design/${isDarkTheme ? (locale === 'ru' ? 'xNaufbsbqExRyBRR' : 'K5DNOSzN3shyP528') : locale === 'ru' ? 'SftG2fDlL2b9uko7' : 'orWMmaTJcO82Eu-h'}/scene.splinecode`;

  return (
    <Wrapper data-testid='technology-planet'>
      <SplineTool scene={ conditionSplineScene } onLoad={ () => setIsLoaded(true) } />
      {isLoaded && (
        <ScrollWrapper>
          <ScrollDown />
        </ScrollWrapper>
      )}
    </Wrapper>
  );
};
