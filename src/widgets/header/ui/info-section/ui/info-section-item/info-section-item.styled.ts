import styled from 'styled-components';
import Link from 'next/link';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 105px;

  @media screen and (width <= 900px) {
    width: 100%;
  }
`;
export const Text = styled.span`
  position: relative;
  display: flex;
  height: auto;
  color: ${({ theme }) => theme.color};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
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
    width: 100%;
    font-size: 36px;
    line-height: 34px;
    letter-spacing: -1.8px;

    &::after {
      margin-bottom: -10px;
    }
  }
`;
export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  border-right: 1px solid ${orange};

  &:hover ${Text} {
    color: ${orange};
  }
  &:hover ${Text}::after {
    opacity: 1;
    transform: scaleX(1);
  }

  @media screen and (width <= 900px) {
    width: 100%;
    border-right: none;
  }
`;
