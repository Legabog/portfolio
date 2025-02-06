import styled, { css } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange, orangeSecondary } = COLORS;

const transition = css`
  transition-property: all;
  transition-duration: 0.15s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;
export const TopBlock = styled.div`
  ${transition}
  display: flex;
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${orange};
  border-radius: 999px;
`;
export const Title = styled.div`
  ${transition}
  color: ${({ theme }) => theme.color};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;
  text-transform: uppercase;
  white-space: break-spaces;
`;
export const Wrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  ${({ $isActive }) =>
    !$isActive &&
    css`
      &:hover {
        cursor: pointer;
        ${TopBlock} {
          background-color: ${orangeSecondary};
        }
        ${Title} {
          color: ${orangeSecondary};
        }
      }
    `}

  ${({ $isActive }) =>
    $isActive &&
    css`
      cursor: not-allowed;
      ${TopBlock} {
        background-color: ${orange};
      }
      ${Title} {
        color: ${orange};
      }
    `}
`;
