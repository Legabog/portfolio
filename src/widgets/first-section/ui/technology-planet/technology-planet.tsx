'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';

import { Loader } from '@shared/ui';
import { Wrapper } from './technology-planet.styled';
import { useLogic } from './lib';

const SplineTool = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <Loader />,
});

export const TechnologyPlanet: FC = () => {
  const { calculatedHeight, conditionSplineScene } = useLogic();

  return (
    <Wrapper $calculatedHeight={ calculatedHeight } data-testid='technology-planet'>
      <SplineTool scene={ conditionSplineScene } />
    </Wrapper>
  );
};
