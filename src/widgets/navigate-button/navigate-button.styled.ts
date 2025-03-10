import styled, { css, keyframes } from 'styled-components';

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

export const Wrapper = styled.button<{ $isInitalized: boolean; $isVisible: boolean }>`
  position: fixed;
  top: 80%;
  right: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${orange};
  border-radius: 6px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  z-index: 1;
  cursor: pointer;

  svg {
    width: 11px;
    height: 11px;
    border-radius: 5px;
    rotate: 180deg;
    animation: ${moveDown} 0.75s ease-out infinite;

    path {
      fill: ${orange};
    }
  }

  &:hover {
    background-color: ${orange};

    svg {
      animation: none;

      path {
        fill: ${({ theme }) => theme.backgroundColor};
      }
    }
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:active {
    transform: scale(0.9);
  }

  ${({ $isVisible, $isInitalized }) =>
    $isInitalized &&
    css`
      animation: ${$isVisible ? fadeIn : fadeOut} 0.75s ease-out;
    `}
  @media only screen and (width <= 900px) {
    right: 6px;

    &&&:hover {
      background-color: ${({ theme }) => theme.backgroundColor};

      path {
        fill: ${orange};
      }
    }

    &&&:active {
      background-color: ${orange};

      svg {
        animation: none;

        path {
          fill: ${({ theme }) => theme.backgroundColor};
        }
      }
    }
  }
`;
