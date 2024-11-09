'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';

import { Loader } from '@shared/ui';
import { useThemeStore } from '@widgets/header';
import { Wrapper } from './human.styled';
import { HUMAN_VARIANTS } from './constants';

const SplineTool = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <Loader />,
});

export const Human: FC = () => {
  const { themeType } = useThemeStore();

  return (
    <Wrapper data-testid='human'>
      <SplineTool
        scene={ `https://prod.spline.design/${HUMAN_VARIANTS[themeType]}/scene.splinecode` }
      />
    </Wrapper>
  );
};
