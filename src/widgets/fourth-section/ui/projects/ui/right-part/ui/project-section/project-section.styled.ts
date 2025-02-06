import styled, { css, keyframes } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange, orangeSecondary } = COLORS;

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;
export const FrontText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;
export const FrontTitle = styled.span`
  color: ${({ theme }) => theme.color};
  font-size: 60px;
  font-weight: 500;
  line-height: 60px;
  transition: 0.9s;

  @media only screen and (width <= 1400px) {
    font-size: 45px;
    line-height: 45px;
  }

  @media only screen and (width <= 1100px) {
    font-size: 35px;
    line-height: 35px;
  }

  @media only screen and (width <= 900px) {
    font-size: 60px;
    line-height: 60px;
  }

  @media only screen and (width <= 600px) {
    font-size: 45px;
    line-height: 45px;
  }

  @media only screen and (width <= 500px) {
    font-size: 40px;
    line-height: 40px;
  }

  @media only screen and (width <= 400px) {
    font-size: 35px;
    line-height: 35px;
  }
`;
export const Description = styled.span`
  color: ${({ theme }) => theme.description};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  transition: 0.9s;
  margin-top: 6px;
  letter-spacing: 0;

  @media only screen and (width <= 1000px) {
    font-size: 12px;
    line-height: 16px;
  }

  @media only screen and (width <= 900px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media only screen and (width <= 500px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
export const TechnologyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  svg {
    width: 38px;
    height: 38px;

    path {
      fill: ${orangeSecondary};
      transition: 0.9s;
    }
  }

  @media only screen and (width <= 900px) {
    svg {
      width: 48px;
      height: 48px;
    }
  }

  @media only screen and (width <= 500px) {
    svg {
      width: 38px;
      height: 38px;
    }
  }
`;
export const FrontHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.description};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  transition: 0.9s;
  text-transform: uppercase;

  @media only screen and (width <= 900px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
export const BackHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  path {
    fill: ${orangeSecondary};
    transition: 0.9s;
  }
`;
export const BackBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;

  @media only screen and (width <= 1000px) {
    margin-top: 16px;
  }

  @media only screen and (width <= 900px) {
    margin-top: 32px;
  }
`;
export const BackTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    min-width: 60px;
    min-height: 60px;
    padding-right: 16px;
    border-right: 1px solid ${orangeSecondary};

    path {
      fill: ${orangeSecondary};
      transition: 0.9s;
    }
  }

  @media only screen and (width <= 1000px) {
    svg {
      width: 36px;
      height: 36px;
    }
  }

  @media only screen and (width <= 900px) {
    svg {
      width: 80px;
      height: 80px;
    }
  }

  @media only screen and (width <= 400px) {
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;
export const BackTitle = styled.span`
  color: ${({ theme }) => theme.color};
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  padding-left: 16px;
  text-transform: uppercase;

  @media only screen and (width <= 1000px) {
    font-size: 28px;
    line-height: 28px;
  }

  @media only screen and (width <= 900px) {
    font-size: 32px;
    line-height: 32px;
  }

  @media only screen and (width <= 400px) {
    font-size: 28px;
    line-height: 28px;
  }
`;
export const BackSecondaryTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0 10px;
  color: ${({ theme }) => theme.color};
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  text-transform: uppercase;

  @media only screen and (width <= 1000px) {
    margin: 8px 0 2px;
  }

  @media only screen and (width <= 900px) {
    margin: 16px 0 10px;
  }
`;
export const BackSecondaryNumberWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding-right: 16px;
  border-right: 1px solid ${orangeSecondary};
`;
export const BackBlinkingStatus = styled.div<{ $isActive: boolean }>`
  width: 8px;
  height: 8px;
  background-color: ${orangeSecondary};
  border-radius: 50%;
  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${orange};
      animation: ${blink} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    `}
`;
export const BackSecondaryTitle = styled.span`
  padding-left: 16px;
`;
export const FrontBody = styled.div`
  display: flex;
  align-items: center;

  svg {
    align-self: flex-start;
    min-width: 150px;
    min-height: 150px;

    path {
      fill: ${orangeSecondary};
      transition: 0.9s;
    }
  }

  @media only screen and (width <= 1400px) {
    svg {
      min-width: 100px;
      min-height: 100px;
    }
  }

  @media only screen and (width <= 1000px) {
    svg {
      min-width: 80px;
      min-height: 80px;
    }
  }

  @media only screen and (width <= 900px) {
    svg {
      min-width: 150px;
      min-height: 150px;
    }
  }

  @media only screen and (width <= 500px) {
    svg {
      min-width: 100px;
      min-height: 100px;
    }
  }
`;
export const FrontFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
const baseCard = css`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: calc(100% - 64px);
  height: 100%;
  padding: 32px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 10px;
  transition: 0.9s;
  cursor: pointer;
  overflow: hidden;
  backface-visibility: hidden;

  &:hover {
    border: 1px solid ${orange};
    ${FrontHeader} {
      color: ${orange};
    }
    ${FrontBody} {
      path:first-child {
        fill: ${orange};
      }
    }
    ${TechnologyWrapper} {
      path {
        fill: ${orange};
      }
    }
    ${BackHeader} {
      path {
        fill: ${orange};
      }
    }
    ${BackTitleWrapper} {
      path:first-child {
        fill: ${orange};
      }
    }
    ${Description} {
      color: ${orange};
    }
  }

  @media only screen and (width <= 1000px) {
    width: calc(100% - 32px);
    padding: 16px;
  }

  @media only screen and (width <= 900px) {
    width: calc(100% - 64px);
    padding: 32px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150vh;

  @media only screen and (width <= 900px) {
    align-items: flex-start;
    height: 508px;
  }

  @media only screen and (width <= 800px) {
    height: 528px;
  }

  @media only screen and (width <= 700px) {
    height: 568px;
  }

  @media only screen and (width <= 650px) {
    height: 628px;
  }

  @media only screen and (width <= 600px) {
    height: 668px;
  }

  @media only screen and (width <= 500px) {
    height: 648px;
  }

  @media only screen and (width <= 400px) {
    height: 678px;
  }
`;
export const Front = styled.div`
  flex-direction: column;
  justify-content: space-between;
  ${baseCard}
`;
export const Back = styled.div`
  flex-direction: column;
  ${baseCard}
`;
export const Card = styled.div<{ $isFliped: boolean }>`
  position: relative;
  display: flex;
  width: 100%;
  height: 350px;
  margin: 0 32px;
  perspective: 4000px;

  ${Front} {
    ${({ $isFliped }) =>
      $isFliped &&
      css`
        transform: rotateY(180deg);
      `}
  }
  ${Back} {
    transform: rotateY(${({ $isFliped }) => ($isFliped ? '1turn' : '180deg')});
  }

  @media only screen and (width <= 1500px) {
    height: 400px;
  }

  @media only screen and (width <= 1400px) {
    height: 420px;
  }

  @media only screen and (width <= 1200px) {
    height: 500px;
  }

  @media only screen and (width <= 1000px) {
    height: 420px;
  }

  @media only screen and (width <= 950px) {
    height: 440px;
  }

  @media only screen and (width <= 900px) {
    height: 380px;
    margin: 0;
  }

  @media only screen and (width <= 800px) {
    height: 400px;
  }

  @media only screen and (width <= 700px) {
    height: 440px;
  }

  @media only screen and (width <= 650px) {
    height: 500px;
  }

  @media only screen and (width <= 600px) {
    height: 540px;
  }

  @media only screen and (width <= 500px) {
    height: 520px;
  }

  @media only screen and (width <= 400px) {
    height: 550px;
  }
`;
