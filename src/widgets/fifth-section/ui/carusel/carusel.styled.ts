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
  text-rendering: optimizeSpeed;
`;
export const Li = styled.li`
  margin-left: 50px;
  list-style-type: none;
`;
export const IconWrapper = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 64px;
  border-radius: 10px;
  border: 1px solid ${orange};
  background-color: ${({ theme }) => theme.backgroundColor};

  svg {
    width: 48px;
    height: 48px;
  }
  g {
    stroke: ${({ theme }) => theme.backgroundColor};
  }

  @media only screen and (max-width: 600px) {
    width: 50px;
  }
`;
export const IconText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 110px;
  width: 100%;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0px;
  margin-top: 8px;
  color: ${({ theme }) => theme.color};
  text-transform: uppercase;
  white-space: nowrap;

  /* @media only screen and (max-width: 900px) {
    top: 60px;
  } */
`;
export const Wrapper = styled.div<{
  $customStyles?: string;
}>`
  margin-top: 40px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  overflow: hidden;
  text-rendering: optimizeSpeed;

  ${({ $customStyles }) =>
    $customStyles &&
    css`
      ${$customStyles}
    `}
`;
