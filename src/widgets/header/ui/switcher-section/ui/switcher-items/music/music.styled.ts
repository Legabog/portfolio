import styled, { css } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const A = styled.a<{ $isActvie: boolean }>`
  position: relative;
  display: block;
  box-sizing: border-box;
  overflow: visible;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 16px;
  cursor: pointer;
  transition: background-color 0.5s;
  ${({ $isActvie }) =>
    $isActvie &&
    css`
      & path {
        fill: ${orange};
      }
    `};

  @media screen and (max-width: 800px) {
    height: 40px;
    width: 50px;

    svg {
      height: 28px;
      width: 28px;
    }
  }
`;
export const Wrapper = styled.div`
  position: relative;
  padding-left: 20px;
  border-left: 1px solid rgb(232, 176, 89);

  &:active ${A} {
    transform: scale(0.95);
  }

  @media screen and (max-width: 800px) {
    padding-left: 40px;
  }
  @media screen and (max-width: 450px) {
    padding-left: 20px;
  }
`;
