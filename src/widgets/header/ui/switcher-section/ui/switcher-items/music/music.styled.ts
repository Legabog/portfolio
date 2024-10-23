import styled, { css } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const A = styled.a<{ $isActvie: boolean }>`
  position: relative;
  display: block;
  height: 28px;
  width: 28px;
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
      border: 1px ${orange} solid;
      & path {
        fill: ${orange};
      }
    `};
`;
export const Wrapper = styled.div`
  position: relative;
  flex: none;
  height: auto;
  width: auto;
  font-size: 14px;
  font-weight: 500;
  &:hover ${A} {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:active ${A} {
    transform: scale(0.95);
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
