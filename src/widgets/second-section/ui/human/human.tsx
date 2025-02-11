'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';

import { Loader } from '@shared/ui';
import { Wrapper } from './human.styled';
import { useLogic } from './lib';

const SplineTool = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <Loader />,
});

export const Human: FC = () => {
  const { conditionSplineScene } = useLogic();

  return (
    <Wrapper data-testid='human' id='human'>
      <SplineTool scene={ conditionSplineScene } />
    </Wrapper>
  );
};
