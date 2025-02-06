import styled, { keyframes } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

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

export const Wrapper = styled.div<{ $isPlayingAnimation: boolean; $isVisible: boolean }>`
  position: sticky;
  top: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% - 64px);
  margin: 60px 32px 20px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  gap: 8px;
  user-select: none;
  animation-play-state: ${({ $isPlayingAnimation }) =>
    $isPlayingAnimation ? 'running' : 'paused'};

  svg {
    width: 10px;
    height: 6px;
    border-radius: 5px;
    animation: ${moveDown} 0.75s ease-out 3s infinite;

    path {
      fill: ${orange};
    }
  }

  @media only screen and (width <= 900px) {
    width: 100%;
    margin: 20px 0;
  }
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: 0;
  white-space: break-spaces;

  &:hover {
    color: ${orange};
  }
`;
