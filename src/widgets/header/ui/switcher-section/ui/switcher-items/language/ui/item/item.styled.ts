import styled, { css } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const Text = styled.span`
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color};

  &::after {
    content: '';
    opacity: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    margin-bottom: -2px;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transition: transform 150ms cubic-bezier(0.5, 0, 0.5, 1);
    transform-origin: left;
    background-color: ${orange};
  }

  @media screen and (max-width: 800px) {
    font-size: 32px;
  }
  @media screen and (max-width: 400px) {
    font-size: 24px;
  }
`;
export const A = styled.a<{ $isActvie: boolean }>`
  position: relative;
  display: block;
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  overflow: visible;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.5s;
  ${({ $isActvie }) =>
    $isActvie &&
    css`
      & ${Text} {
        color: ${orange};
      }
    `};
  @media screen and (max-width: 800px) {
    height: 40px;
    width: 50px;
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
