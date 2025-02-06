import styled, { css } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange, orangeSecondary } = COLORS;

export const Button = styled.button<{ $isActive: boolean }>`
  border: 1px solid ${orange};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  border-radius: 9999px;
  background-color: transparent;
  background-image: none;
  width: 15px;
  height: 15px;

  ${({ $isActive }) =>
    !$isActive &&
    css`
      &:hover {
        cursor: pointer;
        background-color: ${orangeSecondary};
      }
    `}

  ${({ $isActive }) =>
    $isActive &&
    css`
      cursor: not-allowed;
      height: 30px;
      background-color: ${orange};
    `}
`;
