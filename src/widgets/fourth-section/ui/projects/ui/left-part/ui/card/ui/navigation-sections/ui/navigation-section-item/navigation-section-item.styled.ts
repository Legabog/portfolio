import styled, { css } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange, orangeSecondary } = COLORS;

const transition = css`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
`;
export const TopBlock = styled.div`
  ${transition}
  display: flex;
  width: 100%;
  height: 8px;
  border: 1px solid ${orange};
  border-radius: 999px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
export const Title = styled.div`
  ${transition}
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.color};
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
