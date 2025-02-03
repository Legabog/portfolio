import styled, { css, keyframes } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

const fadeIn = keyframes`
  from {
    visibility: hidden;
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;
const fadeOut = keyframes`
from {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}
to {
  visibility: hidden;
  opacity: 0;
  transform: translateY(10px);
}
`;
const moveDown = keyframes`
0% {
  transform: translateY(0px);
  opacity: 1;
}
25% {
  transform: translateY(2px);
  opacity: 0.5;
}
50% {
  transform: translateY(0px);
  opacity: 1;
}
75% {
  transform: translateY(-2px);
  opacity: 1;
}
100% {
  transform: translateY(0px);
  opacity: 1;
}
  `;

export const Wrapper = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  width: calc(100% - 64px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  top: 60px;
  margin: 60px 32px 20px 32px;
  user-select: none;
  gap: 8px;

  svg {
    width: 10px;
    height: 6px;
    border-radius: 5px;
    animation: ${moveDown} 0.75s ease-out 3s infinite;

    path {
      fill: ${orange};
    }
  }

  ${({ $isVisible }) => css`
    animation: ${$isVisible ? fadeIn : fadeOut} 0.75s ease-out;
  `}

  @media only screen and (max-width: 900px) {
    width: 100%;
    margin: 60px 0px 20px 0px;
  }
`;
export const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.color};
  text-transform: uppercase;
  white-space: break-spaces;

  &:hover {
    color: ${orange};
  }
`;
