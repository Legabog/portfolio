import styled, { css } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const Wrapper = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  text-transform: uppercase;

  @media only screen and (width <= 900px) {
    width: 100%;
  }
`;
export const Title = styled.div<{ $isRuLanguage?: boolean; $isSecondTitle?: boolean }>`
  color: ${({ theme }) => theme.color};

  ${({ $isRuLanguage, $isSecondTitle }) =>
    $isRuLanguage &&
    $isSecondTitle &&
    css`
      margin-top: 10px;
    `}
`;
export const InnerTextWrapper = styled.div`
  display: flex;
  display: block;
  flex-direction: column;
  align-items: center;
  align-self: start;
  justify-content: center;
  width: 100%;
  margin-bottom: 20%;
  margin-left: 20%;
  font-size: 96px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -4.8px;
  user-select: none;

  &&& > span:nth-child(2) {
    color: ${orange};

    &::after {
      opacity: 0;
      animation: none;
    }
  }

  @media only screen and (width <= 1500px) {
    font-size: 90px;
  }

  @media only screen and (width <= 1400px) {
    font-size: 84px;
  }

  @media only screen and (width <= 1300px) {
    font-size: 78px;
  }

  @media only screen and (width <= 1200px) {
    font-size: 72px;
  }

  @media only screen and (width <= 1100px) {
    font-size: 60px;
  }

  @media only screen and (width <= 1000px) {
    font-size: 66px;
  }

  @media only screen and (width <= 950px) {
    font-size: 60px;
  }

  @media only screen and (width <= 900px) {
    margin: 70px 20px 0;
    font-size: 52px;
    letter-spacing: -2.6px;
  }

  @media only screen and (width <= 355px) {
    font-size: 42px;
  }
`;
export const Description = styled.div`
  color: ${orange};
  font-size: 18px;
  margin-left: 6px;
  letter-spacing: 0;

  @media only screen and (width <= 1000px) {
    font-size: 16px;
  }

  @media only screen and (width <= 500px) {
    font-size: 14px;
  }

  @media only screen and (width <= 355px) {
    font-size: 12px;
  }
`;
