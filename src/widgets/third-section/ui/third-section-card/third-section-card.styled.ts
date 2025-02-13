import styled, { css, DefaultTheme, keyframes } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange, orangeSecondary } = COLORS;

const blink = (type: 'icon' | 'title', { backgroundColor }: DefaultTheme) => keyframes`
  0% { 
    ${
      type === 'icon'
        ? css`
            fill: ${backgroundColor};
          `
        : css`
            color: ${backgroundColor};
          `
    }
  }
  100% {
    ${
      type === 'icon'
        ? css`
            fill: ${orange};
          `
        : css`
            color: ${orange};
          `
    }
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  user-select: none;

  @media only screen and (width <= 900px) {
    width: calc(100% - 40px);
    margin: 0 20px;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
  width: fit-content;
  padding: 8px 16px;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${orangeSecondary};
  border-radius: 10px;
`;
export const CardAnimatedSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  svg {
    width: 11px;
    height: 11px;

    path {
      animation: ${({ theme }) => blink('icon', theme)} 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
  }

  @media only screen and (width <= 600px) {
    justify-content: flex-start;
  }

  @media only screen and (width <= 400px) {
    svg {
      width: 10px;
      height: 10px;
    }
  }

  @media only screen and (width <= 350px) {
    svg {
      width: 9px;
      height: 9px;
    }
  }
`;
export const DescriptionWrapper = styled.div`
  width: fit-content;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0;

  @media only screen and (width <= 1000px) {
    font-size: 16px;
  }

  @media only screen and (width <= 500px) {
    font-size: 14px;
  }

  @media only screen and (width <= 330px) {
    font-size: 12px;
  }
`;
export const FirstPart = styled.span`
  color: ${({ theme }) => theme.color};
`;
export const SecondPart = styled.span`
  color: ${orange};
`;
export const AnimatedTitle = styled.span`
  margin-left: 3px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-transform: uppercase;
  animation: ${({ theme }) => blink('title', theme)} 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @media only screen and (width <= 400px) {
    margin-left: 2px;
    font-size: 11px;
  }

  @media only screen and (width <= 355px) {
    margin-left: 1px;
    font-size: 10px;
  }
`;
