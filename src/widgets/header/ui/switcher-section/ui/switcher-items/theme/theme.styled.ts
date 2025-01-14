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

  @media screen and (max-width: 900px) {
    height: 40px;
    width: 50px;

    svg {
      height: 28px;
      width: 28px;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 47px;
    height: 35px;

    svg {
      height: 24px;
      width: 24px;
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

  @media screen and (max-width: 900px) {
    padding: 0px 40px;
  }
  @media screen and (max-width: 450px) {
    padding: 0px 20px;
  }
`;
export const IconWrapper = styled.div<{ $isLightMode: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;

  svg {
    position: absolute;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  & svg:first-child {
    opacity: ${({ $isLightMode }) => ($isLightMode ? 1 : 0)};
    transform: translateX(${({ $isLightMode }) => ($isLightMode ? '0deg' : '90deg')});
  }
  & svg:last-child {
    opacity: ${({ $isLightMode }) => (!$isLightMode ? 1 : 0)};
    transform: translateX(${({ $isLightMode }) => (!$isLightMode ? '0deg' : '-90deg')});
  }
`;
