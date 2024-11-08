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

const Main: FC = () => {
  const { onMouseMoveHandler } = useAdditionalLogic();

  return (
    <Wrapper onMouseMove={ onMouseMoveHandler }>
      <Background />
      <FirstSection />
      <SecondSection />
      {/* <Wrapperrr>
        <SplineTool
          scene={ `https://prod.spline.design/${isDarkTheme ? (locale === 'ru' ? 'xgiHCRtcVsbjIgGM' : 'JT-BdgY5mt5q4jxh') : locale === 'ru' ? 'f0QfGcXtdk7PMVgF' : 'MGz6m6545xGiYPY5'}/scene.splinecode` }
        />
        <ScrollDown/>
      </Wrapperrr> */}
    </Wrapper>
  );
};

export default Main;
