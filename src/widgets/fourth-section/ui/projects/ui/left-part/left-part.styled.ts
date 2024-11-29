import styled, { css, keyframes } from 'styled-components';

import { COLORS } from '@shared/constants';
import { Props } from './types';

const { orange, orangeSecondary } = COLORS;

const moving = (caruselType: 'left' | 'right') => {
  const translateX0: { [key in typeof caruselType]: string } = {
    left: '0',
    right: 'calc(-100% - 20px)',
  };
  const translateX100: { [key in typeof caruselType]: string } = {
    left: 'calc(-100% - 20px)',
    right: '0',
  };

  return keyframes`
  0% {
    transform: translateX(${translateX0[caruselType]});
  }
  100% {
    transform: translateX(${translateX100[caruselType]});
  }
`;
};
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
`;
export const Example = styled.div`
  width: 100%;
  height: 20vh;
`;
export const AnimatedCarusel = styled.div<{
  caruselType: 'left' | 'right';
  isPaused: boolean;
  customStyles?: string;
}>`
  width: 600px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  overflow: hidden;
  text-rendering: optimizeSpeed;

  & span {
    text-rendering: optimizeSpeed;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    animation: ${({ caruselType }) => moving(caruselType)} 40s linear infinite;
    animation-play-state: ${({ isPaused }) => (isPaused ? 'paused' : 'running')};

    & li {
      color: ${orangeSecondary};
      list-style-type: none;
      font-size: 50px;
      line-height: 50px;
      font-weight: 500;
      margin-left: 32px;
    }
  }
  ${({ customStyles }) =>
    customStyles &&
    css`
      ${customStyles}
    `}
`;
export const CardWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
export const CardBody = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  align-items: center;
  height: 80vh;
`;
export const InfoSection = styled.div``;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const Title = styled.span`
  color: ${({ theme }) => theme.color};
  font-size: 60px;
  height: fit-content;
  font-weight: 400;

  & > span:nth-child(2) {
    color: ${orange};
  }
  @media only screen and (max-width: 1500px) {
    font-size: 90px;
  }
  @media only screen and (max-width: 1400px) {
    font-size: 84px;
  }
  @media only screen and (max-width: 1300px) {
    font-size: 78px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 72px;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 66px;
  }
  @media only screen and (max-width: 950px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 900px) {
    margin: 70px 20px 0px 20px;
    font-size: 52px;
    letter-spacing: -2.6px;
  }
  @media only screen and (max-width: 330px) {
    font-size: 42px;
  }
`;
export const Description = styled.span`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.description};

  @media only screen and (max-width: 1000px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 330px) {
    font-size: 12px;
  }
`;
export const SeperatorWrapper = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  transform: translateX(-50%);
  left: 100%;
  z-index: -2;

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    transform: translateX(-50%);
    content: '';
    left: 50%;
    width: 1px;
    background: ${orangeSecondary};
  }
`;
export const Seperator = styled.div`
  position: sticky;
  top: 0;
  margin-top: 150px;
`;
export const IconWrapper = styled.div<
  Pick<Props, 'overlappingType'> & { isCenterWrapper?: boolean }
>`
  svg {
    width: 64px;
    height: 64px;
    ${({ overlappingType }) =>
      overlappingType === 'amusic' &&
      css`
        & path:nth-child(3) {
          fill: ${({ theme }) => theme.backgroundColor};
        }
      `};
  }
  ${({ isCenterWrapper }) =>
    isCenterWrapper &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 130px;
      height: 130px;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.backgroundColor};
      border: 1px solid ${orangeSecondary};
      box-sizing: border-box;
      cursor: pointer;
    `}
`;
