import styled, { css, keyframes } from 'styled-components';

import { COLORS } from '@shared/constants';
import { State } from './types';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
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
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
export const Backdrop = styled.div<{ $isUsedBefore: boolean; $state: State['state'] }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: ${({ $state }) => ($state !== 0 ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  outline: 0;
  background: ${({ theme }) => theme.backgroundColor};
  opacity: ${({ $state }) => ($state !== 0 ? 1 : 0)};
  transition: opacity 300ms;
  animation: 300ms cubic-bezier(0.5, 0, 0.5, 1) 0s 1 normal forwards running
    ${({ $state, $isUsedBefore }) =>
      $state === 1 && $isUsedBefore ? move : $state === 2 && $isUsedBefore ? moveOut : undefined};
`;
export const BackdropWrapper = styled.div<{ $isUsedBefore: boolean; $state: State['state'] }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;

  ${({ $state, $isUsedBefore }) =>
    $state === 1 &&
    $isUsedBefore &&
    css`
      animation: ${fadeIn} 1s ease-out;
    `}
`;
export const Button = styled.button`
  position: relative;
  width: 82px;
  height: 24px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  z-index: 3;
  pointer-events: all;
`;
export const Span = styled.span<{ $spanType: 'first' | 'second'; $state: State['state'] }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 1px;
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
