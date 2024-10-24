'use client';

import {
  FC,
  // useState
} from 'react';
// import SplineTool from '@splinetool/react-spline';
// import styled, { css } from 'styled-components';
import dynamic from 'next/dynamic';
// import { useLocale } from 'next-intl';

import { Loader } from '@shared/ui';
// import { useThemeStore } from '@widgets/header';
// import { Locale } from '@locales';
import { useAdditionalLogic } from './lib';
import { Wrapper } from './page.styled';

// const Wrapperr = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 55%;
//   height: 55%;
//   margin-left: -45%;
//   margin-bottom: 150px;
// `;
// const Wrapperrr = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100vh;

//   &&& > div:nth-child(3) {
//     margin-bottom: 150px;
//   }
// `;

// const Button = styled.button`
//   background-color: transparent;
//   border: 0;
//   width: 82px;
//   height: 24px;
//   position: relative;
//   z-index: 15;
//   pointer-events: all;
// `;
// const FirstSpan = styled.span<{ $isClicked: boolean }>`
//   width: 100%;
//   height: 1px;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   ${({ $isClicked }) => $isClicked ? css`transform: translate(-20%, -50%) rotate(-45deg) scaleX(0.5);` : css`transform: translate(-50%, -50%);`}
//   background-color: #f2f2f2;
//   opacity: 1;
//   transition:
//     transform 0.25s ease-out,
//     opacity 0.25s ease;
// `;
// const SecondSpan = styled.span<{ $isClicked: boolean }>`
//   width: 100%;
//   height: 1px;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   ${({ $isClicked }) => $isClicked ? css`transform: translate(-20%, -50%) rotate(45deg) scaleX(0.5);` : css`transform: translate(-50%, calc(-50% + 0.4rem));`}
//   background-color: #f2f2f2;
//   opacity: 1;
//   transition:
//     transform 0.25s ease-out,
//     opacity 0.25s ease;
//   background-color: #f2f2f2;
//   opacity: 1;
// `;

const Background = dynamic(() => import('@widgets/background'), {
  loading: () => <Loader />,
  ssr: false,
});
// const FirstSection = dynamic(() => import('@features/first-section'), {
//   loading: () => <Loader />,
//   ssr: false,
// });
// const TypedText = dynamic(() => import('@widgets/typed-text'), {
//   loading: () => <Loader />,
//   ssr: false,
// });

const Home: FC = () => {
  // const locale = useLocale() as Locale;
  const { onMouseMoveHandler } = useAdditionalLogic();
  // const { themeType } = useThemeStore();
  // const isDarkTheme = themeType === 'dark';

  // const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <Wrapper onMouseMove={ onMouseMoveHandler }>
      <Background />
      {/* <Button onClick={() => setIsClicked(prev => !prev)}>
        <FirstSpan $isClicked={ isClicked } />
        <SecondSpan $isClicked={ isClicked } />
      </Button> */}
      {/* <FirstSection /> */}
      {/* <Wrapperrr>
        <Wrapperr>
          <SplineTool
            scene={ `https://prod.spline.design/${isDarkTheme ? 'KitYQfe9ltuZFkAn' : 'Ti0aboptSyKIONzY'}/scene.splinecode` }
          />
        </Wrapperr>
        <TypedText />
      </Wrapperrr>
      <Wrapperrr>
        <SplineTool
          scene={ `https://prod.spline.design/${isDarkTheme ? (locale === 'ru' ? 'xgiHCRtcVsbjIgGM' : 'JT-BdgY5mt5q4jxh') : locale === 'ru' ? 'f0QfGcXtdk7PMVgF' : 'MGz6m6545xGiYPY5'}/scene.splinecode` }
        />
      </Wrapperrr> */}
    </Wrapper>
  );
};

export default Home;
