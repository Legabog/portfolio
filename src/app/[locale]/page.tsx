'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';

import { Loader } from '@shared/ui';
import { useAdditionalLogic } from './lib';
import { Wrapper } from './page.styled';

const Header = dynamic(() => import('@widgets/header'), { loading: () => <Loader />, ssr: false });
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
const FourthSection = dynamic(() => import('@widgets/fourth-section'), {
  loading: () => <Loader />,
  ssr: false,
});
const FifthSection = dynamic(() => import('@widgets/fifth-section'), {
  loading: () => <Loader />,
  ssr: false,
});
const Footer = dynamic(() => import('@widgets/footer'), { loading: () => <Loader />, ssr: false });

const Main: FC = () => {
  const { onMouseMoveHandler } = useAdditionalLogic();

  return (
    <Wrapper onMouseMove={ onMouseMoveHandler }>
      <Header />
      <Background />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </Wrapper>
  );
};

export default Main;
