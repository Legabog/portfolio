import styled, { css } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange, orangeSecondary } = COLORS;

export const Button = styled.button<{ $isActive: boolean }>`
  width: 15px;
  height: 15px;
  background-color: transparent;
  background-image: none;
  border: 1px solid ${orange};
  border-radius: 9999px;
  transition-property: all;
  transition-duration: 0.15s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $isActive }) =>
    !$isActive &&
    css`
      &:hover {
        background-color: ${orangeSecondary};
        cursor: pointer;
      }
    `}

  ${({ $isActive }) =>
    $isActive &&
    css`
      height: 30px;
      background-color: ${orange};
      cursor: not-allowed;
    `}
`;
