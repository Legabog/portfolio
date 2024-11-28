import styled, { css, keyframes } from 'styled-components';

import { COLORS } from '@shared/constants';
import { Props } from './types';

const { orange, orangeSecondary } = COLORS;

const animation = keyframes`
  0% {
    transform: translateX(0);
}
100% {
    transform: translateX(calc(100% - 20px));
}
`;
export const Wrapper = styled.div<Pick<Props, 'overlappingType'>>`
  width: 100%;
  height: 400px;
  display: flex;
  position: sticky;
  top: 0;
  padding: 250px 0 132px;
  /* background-color: ${({ theme }) => theme.backgroundColor}; */

  & > svg:nth-child(2),
  > div > div > div > svg {
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
`;
export const TitleWrapper = styled.div`
  width: 80%;
  display: flex;
  gap: 8px;
`;
export const Title = styled.span`
  color: ${({ theme }) => theme.color};
  font-size: 36px;
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
export const SeperatorWrapper = styled.div`
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
  margin-top: 250px;
`;
export const IconWrapper = styled.div`
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
`;
export const AnimatedCarusel = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  text-rendering: optimizeSpeed;

  & span {
    text-rendering: optimizeSpeed;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    animation: ${animation} 20s linear infinite;
    animation-play-state: running;
  }
`;
