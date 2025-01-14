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
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;

  @media only screen and (max-width: 900px) {
    width: calc(100% - 40px);
    margin: 0px 20px;
  }
`;
export const Card = styled.div`
  margin-top: 16px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 8px 16px;
  border-radius: 10px;
  border: 1px solid ${orangeSecondary};
  background-color: ${({ theme }) => theme.backgroundColor};
`;
export const CardAnimatedSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    width: 11px;
    height: 11px;

    path {
      animation: ${({ theme }) => blink('icon', theme)} 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
  }

  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
  }
  @media only screen and (max-width: 400px) {
    svg {
      width: 10px;
      height: 10px;
    }
  }
  @media only screen and (max-width: 350px) {
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
  letter-spacing: 0px;
  text-transform: uppercase;

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
export const FirstPart = styled.span`
  color: ${({ theme }) => theme.color};
`;
export const SecondPart = styled.span`
  color: ${orange};
`;
export const AnimatedTitle = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-transform: uppercase;
  animation: ${({ theme }) => blink('title', theme)} 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  margin-left: 3px;

  @media only screen and (max-width: 400px) {
    font-size: 11px;
    margin-left: 2px;
  }
  @media only screen and (max-width: 355px) {
    font-size: 10px;
    margin-left: 1px;
  }
`;
