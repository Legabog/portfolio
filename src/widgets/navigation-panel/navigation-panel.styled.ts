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

export const Wrapper = styled.div<{ $isInitialized: boolean; $isVisible: boolean }>`
  position: fixed;
  top: 30%;
  right: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  gap: 24px;
  z-index: 1;

  ${({ $isVisible, $isInitialized }) =>
    $isInitialized &&
    css`
      animation: ${$isVisible ? fadeIn : fadeOut} 0.75s ease-out;
    `}
`;
export const NavigationPanelItemsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: 1px solid ${orange};
  border-radius: 9999px;
`;
