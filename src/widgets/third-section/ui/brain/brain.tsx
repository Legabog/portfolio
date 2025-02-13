'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';

import { Loader } from '@shared/ui';
import { Wrapper } from './brain.styled';
import { useLogic } from './lib';

const SplineTool = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <Loader />,
});

export const Brain: FC = () => {
  const { conditionSplineScene } = useLogic();

  return (
    <Wrapper data-testid='brain'>
      <SplineTool scene={ conditionSplineScene } />
    </Wrapper>
  );
};
