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
  text-rendering: optimizeSpeed;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  animation: ${({ $caruselType }) => moving($caruselType)} 40s linear infinite;
  animation-play-state: ${({ $isPaused }) => ($isPaused ? 'paused' : 'running')};
`;
export const Li = styled.li<{
  $customStyles?: string;
}>`
  color: ${orange};
  font-size: 80px;
  line-height: 80px;
  font-weight: 500;
  margin-left: 32px;
  list-style-type: none;

  &:nth-child(even) {
    color: ${({ theme }) => theme.backgroundColor};
    text-shadow:
      -1px 1px 2px ${orange},
      1px 1px 2px ${orange},
      1px -1px 0 ${orange},
      -1px -1px 0 ${orange};
  }

  ${({ $customStyles }) =>
    $customStyles &&
    css`
      ${$customStyles}
    `}
`;
export const Wrapper = styled.div<{
  $customStyles?: string;
}>`
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
