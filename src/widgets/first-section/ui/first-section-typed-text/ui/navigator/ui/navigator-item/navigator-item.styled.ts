import styled from 'styled-components';
import Link from 'next/link';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const Text = styled.span`
  position: relative;
  display: flex;
  height: auto;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.color};
  text-transform: uppercase;
  white-space: break-spaces;

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
`;
export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: fit-content;
`;
export const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;

  &:hover ${Text} {
    color: ${orange};
  }
  &:hover ${Text}::after {
    opacity: 1;
    transform: scaleX(1);
  }
`;
