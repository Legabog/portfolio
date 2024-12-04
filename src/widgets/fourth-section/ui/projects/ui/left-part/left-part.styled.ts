import styled, { css, keyframes } from 'styled-components';
import Image from 'next/image';

import { COLORS } from '@shared/constants';
import { Props } from './types';

const { orange, orangeSecondary } = COLORS;

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;
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
  overflow: clip;
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
  height: 10vh;
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
      color: ${orange};
      font-size: 80px;
      line-height: 80px;
      font-weight: 500;
      margin-left: 32px;
      list-style-type: none;
    }
    & li:nth-child(even) {
      color: ${({ theme }) => theme.backgroundColor};
      text-shadow:
        -1px 1px 2px ${orange},
        1px 1px 2px ${orange},
        1px -1px 0 ${orange},
        -1px -1px 0 ${orange};
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
  height: calc(80vh - 100px);
`;
export const InfoSection = styled.div``;
export const TopNumber = styled.span`
  display: flex;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.description};
  margin-bottom: 3px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Title = styled.span`
  color: ${({ theme }) => theme.color};
  font-size: 36px;
  line-height: 44px;
  font-weight: 500;
  height: fit-content;

  & > span:nth-child(2) {
    color: ${orange};
  }
`;
export const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid ${orangeSecondary};
  color: ${orange};
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 6px;
  font-size: 14px;
  letter-spacing: 0.02em;
  line-height: 150%;
  padding: 3px 6px;
`;
export const BlinkingStatus = styled.div<{ isActive: boolean }>`
  width: 8px;
  height: 8px;
  background-color: ${orangeSecondary};
  border-radius: 50%;
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${orange};
      animation: ${blink} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    `}
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
    width: 40px;
    height: 40px;
    ${({ overlappingType }) =>
      overlappingType === 'musicon' &&
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

      svg {
        width: 64px;
        height: 64px;
      }
    `}
`;
export const StyledImage = styled(Image)`
  pointer-events: none;
  z-index: -2;
  /* width: 1512px;
    min-width: 1512px; */
  /* height: 1512px; */
  /* min-height: 1512px; */
  position: absolute;
  object-fit: fill;
  top: 0;
  inset: -300px auto auto;
`;
