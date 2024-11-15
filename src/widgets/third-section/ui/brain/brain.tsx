'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useLocale } from 'next-intl';

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

  const conditionSplineScene = `https://prod.spline.design/${BRAIN_VARIANTS[themeType][locale]}/scene.splinecode`;

  return (
    <Wrapper data-testid='brain'>
      <SplineTool scene={ conditionSplineScene } />
    </Wrapper>
  );
};
