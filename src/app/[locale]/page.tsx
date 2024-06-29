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
const Spline = dynamic(() => import('@widgets/spline'), { loading: () => <Loader />, ssr: false });
const TypedText = dynamic(() => import('@widgets/typed-text'), {
  loading: () => <Loader />,
  ssr: false,
});

const Home: FC = () => {
  const { onMouseMoveHandler } = useAdditionalLogic();

  return (
    <Wrapper onMouseMove={ onMouseMoveHandler }>
      <Background />
      <Spline />
      <TypedText />
    </Wrapper>
  );
};
export default Home;
