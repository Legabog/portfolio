import styled, { css, keyframes } from 'styled-components';

import { COLORS } from '@shared/constants';

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
export const Backdrop = styled.div<{ $isActive: boolean }>`
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  background-color: rgb(10, 10, 10);
  max-width: 100%;
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: column;
  overflow: hidden scroll;
  width: 100%;
  top: 60px;
  bottom: 0px;
  right: 0px;
  outline: 0px;
  transition: opacity 300ms;
  animation: 300ms cubic-bezier(0.5, 0, 0.5, 1) 0s 1 normal none running
    ${({ $isActive }) => ($isActive ? move : moveOut)};
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
export const Span = styled.span<{ $isActive: boolean; $spanType: 'first' | 'second' }>`
  width: 100%;
  height: 1px;
  position: absolute;
  left: 50%;
  top: 50%;
  ${({ $isActive, $spanType }) =>
    $isActive
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
