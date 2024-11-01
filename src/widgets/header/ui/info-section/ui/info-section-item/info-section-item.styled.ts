import styled from 'styled-components';
import Link from 'next/link';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const Text = styled.span`
  position: relative;
  display: flex;
  height: auto;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.color};
  text-transform: uppercase;

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

  @media screen and (max-width: 900px) {
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

  @media screen and (max-width: 900px) {
    border-right: none;
    width: 100%;
  }
`;
