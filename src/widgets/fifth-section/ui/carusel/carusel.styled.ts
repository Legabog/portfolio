import styled, { css, keyframes } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

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
export const Span = styled.span<{ $caruselType: 'left' | 'right'; $isPaused: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  animation: ${({ $caruselType }) => moving($caruselType)} 40s linear infinite;
  animation-play-state: ${({ $isPaused }) => ($isPaused ? 'paused' : 'running')};
  text-rendering: optimizespeed;
`;
export const Li = styled.li`
  margin-left: 50px;
  list-style-type: none;

  @media only screen and (width <= 600px) {
    margin-left: 20px;
  }
`;
export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 64px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${orange};
  border-radius: 10px;

  svg {
    width: 48px;
    height: 48px;
  }

  g {
    stroke: ${({ theme }) => theme.backgroundColor};
  }

  @media only screen and (width <= 600px) {
    width: 50px;
    padding: 32px;
  }
`;
export const IconText = styled.span`
  position: absolute;
  top: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${({ theme }) => theme.color};
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  margin-top: 8px;
  text-transform: uppercase;
  letter-spacing: 0;
  white-space: nowrap;

  @media only screen and (width <= 600px) {
    display: none;
  }
`;
export const Wrapper = styled.div<{
  $customStyles?: string;
}>`
  margin-top: 40px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  overflow: hidden;
  text-rendering: optimizespeed;

  ${({ $customStyles }) =>
    $customStyles &&
    css`
      ${$customStyles}
    `}
`;
