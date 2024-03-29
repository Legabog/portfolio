import styled, { keyframes } from 'styled-components';

import { ItemWrapperProps } from './types';

const fadeIn = keyframes`
	from {
		opacity: 0;
		top: -38px;
	}
	to {
		opacity: 1;
		top: -46px;
	}
`;
const fadeOut = keyframes`
	from {
		opacity: 1;
		top: -46px;
	}
	to {
		opacity: 0;
		top: -38px;
	}
`;
export const Tooltip = styled.div<{ $mouseIn: number }>`
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  opacity: 0;
  padding: 4px 8px;
  position: absolute;
  border: 1px ${({ theme }) => theme.boxShadow} solid;
  background-color: ${({ theme }) => theme.backgroundColor};
  white-space: pre;
  height: min-content;
  width: min-content;
  color: ${({ theme }) => theme.color};
  pointer-events: none;
  border-radius: 8px;
  box-shadow:
    ${({ theme }) => theme.boxShadow} 0px 0px 4px 0px,
    ${({ theme }) => theme.boxShadow} 0px 2px 8px 0px,
    ${({ theme }) => theme.boxShadow} 0px 4px 16px 0px;
  animation: ${({ $mouseIn }) => {
      if ($mouseIn === 1) return fadeIn;
      if ($mouseIn === 2) return fadeOut;
    }}
    0.1s linear forwards;
`;
export const A = styled.a`
  position: relative;
  display: block;
  height: 48px;
  width: 48px;
  box-sizing: border-box;
  border-radius: 12px;
  overflow: visible;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px rgba(0, 0, 0, 0.1) solid;
  border-radius: 12px;
  box-shadow:
    0px 1px 4px 0px ${({ theme }) => theme.boxShadow},
    0px 2px 8px 0px ${({ theme }) => theme.boxShadow};
  cursor: pointer;
`;
export const Wrapper = styled.div<ItemWrapperProps>`
  position: relative;
  flex: none;
  height: auto;
  width: auto;
  &:hover ${A} {
    background-color: ${({ $hoverColor }) => $hoverColor};
  }
  &:active ${A} {
    transform: scale(0.95);
  }
`;
