import styled, { css, keyframes } from 'styled-components';

import { COLORS } from '@shared/constants';
import { State } from './types';

const move = keyframes`
  0% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(0%)
  }  
`;
const moveOut = keyframes`
  0% {
    transform: translateX(0%)
  }
  100% {
    transform: translateX(100%)
  }  
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
export const Backdrop = styled.div<{ $isUsedBefore: boolean; $state: State['state'] }>`
  opacity: ${({ $state }) => ($state !== 0 ? 1 : 0)};
  background-color: transparent;
  max-width: 100%;
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  top: 60px;
  bottom: 0px;
  right: 0px;
  outline: 0px;
  transition: opacity 300ms;
  animation: 300ms cubic-bezier(0.5, 0, 0.5, 1) 0s 1 normal forwards running
    ${({ $state, $isUsedBefore }) =>
      $state === 1 && $isUsedBefore ? move : $state === 2 && $isUsedBefore ? moveOut : undefined};
`;
export const Button = styled.button`
  background-color: transparent;
  width: 82px;
  border: 0;
  height: 24px;
  position: relative;
  z-index: 15;
  pointer-events: all;
  cursor: pointer;
`;
export const Span = styled.span<{ $spanType: 'first' | 'second'; $state: State['state'] }>`
  width: 100%;
  height: 1px;
  position: absolute;
  left: 50%;
  top: 50%;
  ${({ $state, $spanType }) =>
    $state === 1
      ? css`
          transform: translate(-20%, -50%) rotate(${$spanType === 'first' ? '-' : ''}45deg)
            scaleX(0.5);
        `
      : css`
          transform: translate(-50%, calc(-50% ${$spanType === 'first' ? '-' : '+'} 0.4rem));
        `}
  background-color: ${COLORS.orange};
  opacity: 1;
  transition:
    transform 0.25s ease-out,
    opacity 0.25s ease;
`;
