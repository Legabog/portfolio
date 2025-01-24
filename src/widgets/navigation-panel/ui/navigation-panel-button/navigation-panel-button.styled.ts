import styled, { css, keyframes } from 'styled-components';

import { COLORS } from '@shared/constants';
import { Props } from './types';

const { orange } = COLORS;

const moveDown = keyframes`
0% {
  transform: translateY(0px);
  opacity: 1;
}
25% {
  transform: translateY(2px);
  opacity: 0.5;
}
50% {
  transform: translateY(0px);
  opacity: 1;
}
75% {
  transform: translateY(-2px);
  opacity: 1;
}
100% {
  transform: translateY(0px);
  opacity: 1;
}
  `;
export const border = (customStyle?: string) => css`
  border: 1px solid ${orange};
  border-radius: 6px;
  ${customStyle}
`;
export const flexCenter = (customStyle?: string) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  ${customStyle}
`;
export const absoluteWithFullSize = (customStyle?: string) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${customStyle}
`;
export const SecondaryWrapper = styled.div`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
export const ThirdWrapper = styled.div`
  ${absoluteWithFullSize()}
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  transform: translate(0, 0) rotate(-90deg) skewX(0) skewY(0) scaleX(1) scaleY(1);
`;
export const FourthWrapper = styled.div`
  ${absoluteWithFullSize()}
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;
export const FirstIconWrapper = styled.div`
  ${absoluteWithFullSize()}
  ${flexCenter()}

  svg {
    animation: ${moveDown} 0.75s ease-out infinite;
  }
`;
export const SecondIconWrapper = styled.div`
  ${absoluteWithFullSize(`top: 100%;`)}
  ${flexCenter()}
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  transform: translate(0, 0) rotate(0deg) skewX(0) skewY(0) scaleX(1) scaleY(1);
  rotate: 0deg;
`;
export const Wrapper = styled.button<{ $type: Props['type'] }>`
  ${border()}
  margin: 0;
  padding: 0;
  background-color: transparent;
  background-image: none;
  cursor: pointer;
  rotate: ${({ $type }) => ($type === 'top' ? '' : '-')}90deg;

  &:hover {
    border: 1px solid ${orange};
    ${SecondaryWrapper} {
      background-color: ${orange};
    }
    ${FourthWrapper} {
      top: -100%;
    }
    svg {
      animation: none;
      path {
        fill: ${({ theme }) => theme.color};
      }
    }
  }
  &:active {
    transform: scale(0.9);
  }
`;
