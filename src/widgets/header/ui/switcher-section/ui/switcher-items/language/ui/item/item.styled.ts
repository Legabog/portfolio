import styled, { css } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const Text = styled.span`
  color: ${({ theme }) => theme.color};
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${orange};
    opacity: 0;
    transition: transform 150ms cubic-bezier(0.5, 0, 0.5, 1);
    transform: scaleX(0);
    margin-bottom: -2px;
    content: '';
    transform-origin: left;
  }

  @media screen and (width <= 900px) {
    font-size: 32px;
  }

  @media only screen and (width <= 600px) {
    font-size: 28px;
  }

  @media screen and (width <= 400px) {
    font-size: 24px;
  }
`;
export const A = styled.a<{ $isActvie: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  overflow: visible;
  text-decoration: none;
  transition: background-color 0.5s;
  cursor: pointer;

  ${({ $isActvie }) =>
    $isActvie &&
    css`
      & ${Text} {
        color: ${orange};
      }
    `};
  @media screen and (width <= 900px) {
    width: 50px;
    height: 40px;
  }

  @media only screen and (width <= 600px) {
    width: 47px;
    height: 35px;
  }

  @media screen and (width <= 400px) {
    width: 35px;
    height: 30px;
  }
`;
export const ItemWrapper = styled.div`
  position: relative;

  &:hover ${Text}::after {
    opacity: 1;
    transform: scaleX(1);
  }
  &:active ${A} {
    transform: scale(0.95);
  }
`;
