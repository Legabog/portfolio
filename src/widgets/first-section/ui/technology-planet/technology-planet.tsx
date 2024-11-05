'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useLocale } from 'next-intl';

import { useMediaQuery } from '@shared/hooks';
import { Loader } from '@shared/ui';
import { useThemeStore } from '@widgets/header';
import { Locale } from '@locales';
import { Wrapper } from './technology-planet.styled';

const SplineTool = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <Loader />,
});

export const TechnologyPlanet: FC = () => {
  const locale = useLocale() as Locale;
  const { themeType } = useThemeStore();
  const isBreakpoint = useMediaQuery(900);

  const isDarkTheme = themeType === 'dark';
  const conditionSplineScene = `https://prod.spline.design/${isBreakpoint ? 'SxeNX2hwfsDnEPHu' : isDarkTheme ? (locale === 'ru' ? 'xNaufbsbqExRyBRR' : 'K5DNOSzN3shyP528') : locale === 'ru' ? 'SftG2fDlL2b9uko7' : 'orWMmaTJcO82Eu-h'}/scene.splinecode`;

  return (
    <Wrapper
      $marginBottom={ `${window.innerHeight - (document.getElementById('first-section-typed-text')?.offsetHeight as number)}px` }
      data-testid='technology-planet'
    >
      <SplineTool scene={ conditionSplineScene } />
    </Wrapper>
  );
};
