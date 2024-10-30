import styled from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const A = styled.a`
  position: relative;
  display: block;
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  border-radius: 7px;
  overflow: visible;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.5s;

  path {
    fill: ${orange};
  }

  @media screen and (max-width: 800px) {
    height: 40px;
    width: 50px;

    svg {
      height: 28px;
      width: 28px;
    }
  }
  @media screen and (max-width: 400px) {
    width: 35px;
    height: 30px;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  padding: 0px 20px;
  border-left: 1px solid rgb(232, 176, 89);

  &:active ${A} {
    transform: scale(0.95);
  }

  @media screen and (max-width: 800px) {
    padding: 0px 40px;
  }
  @media screen and (max-width: 450px) {
    padding: 0px 20px;
  }
`;