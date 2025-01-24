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

export const Wrapper = styled.div<{ $isInitalized: boolean; $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  gap: 24px;
  top: 30%;
  right: 2%;
  z-index: 1;

  ${({ $isVisible, $isInitalized }) =>
    $isInitalized &&
    css`
      animation: ${$isVisible ? fadeIn : fadeOut} 0.75s ease-out;
    `}
`;
export const NavigationPanelItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;
  border-radius: 9999px;
  border: 1px solid ${orange};
`;
