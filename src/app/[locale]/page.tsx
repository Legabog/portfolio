'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';

import { Loader } from '@shared/ui';
import { useAdditionalLogic } from './lib';
import { Wrapper } from './page.styled';

const Background = dynamic(() => import('@widgets/background'), {
  loading: () => <Loader />,
  ssr: false,
});
const FirstSection = dynamic(() => import('@widgets/first-section'), {
  loading: () => <Loader />,
  ssr: false,
});
const SecondSection = dynamic(() => import('@widgets/second-section'), {
  loading: () => <Loader />,
  ssr: false,
});
const ThirdSection = dynamic(() => import('@widgets/third-section'), {
  loading: () => <Loader />,
  ssr: false,
});

const Main: FC = () => {
  const { onMouseMoveHandler } = useAdditionalLogic();

  return (
    <Wrapper onMouseMove={ onMouseMoveHandler }>
      <Background />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </Wrapper>
  );
};

export default Main;
