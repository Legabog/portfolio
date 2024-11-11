import styled, { css } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const Wrapper = styled.div<{ $flip?: boolean }>`
  width: calc(100% - 142px);
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 16px;
  cursor: pointer;
  transition: 150ms;
  transform-style: preserve-3d;
  transform: rotateX(0deg) translateX(0deg);
  ${({ $flip }) =>
    $flip &&
    css`
      transform: rotateX(180deg);
    `}

  &:hover {
    border: 1px solid ${orange};
    filter: brightness(1.05);
  }

  @media only screen and (max-width: 900px) {
    width: calc(100% - 40px);
  }
`;
