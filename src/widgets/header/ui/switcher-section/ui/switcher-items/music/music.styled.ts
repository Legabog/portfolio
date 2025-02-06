import styled from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const A = styled.a`
  position: relative;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  transition: background-color 0.5s;
  cursor: pointer;
  box-sizing: border-box;
  overflow: visible;
  text-decoration: none;

  path {
    fill: ${orange};
  }

  @media screen and (width <= 900px) {
    width: 50px;
    height: 40px;

    svg {
      width: 28px;
      height: 28px;
    }
  }

  @media only screen and (width <= 600px) {
    width: 47px;
    height: 35px;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media screen and (width <= 400px) {
    width: 35px;
    height: 30px;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  padding-left: 20px;
  border-left: 1px solid rgb(232 176 89);

  &:active ${A} {
    transform: scale(0.95);
  }

  @media screen and (width <= 900px) {
    padding-left: 40px;
  }

  @media screen and (width <= 450px) {
    padding-left: 20px;
  }
`;
