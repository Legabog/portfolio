import styled from 'styled-components';
import Link from 'next/link';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const Text = styled.span`
  position: relative;
  display: flex;
  height: auto;
  color: ${({ theme }) => theme.color};
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  text-transform: uppercase;
  letter-spacing: 0;
  white-space: break-spaces;

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
`;
export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: none;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  &:hover ${Text} {
    color: ${orange};
  }
  &:hover ${Text}::after {
    opacity: 1;
    transform: scaleX(1);
  }
`;
