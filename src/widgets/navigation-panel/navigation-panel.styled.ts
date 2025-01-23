import styled, { css, keyframes } from 'styled-components';

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
  top: 30%;
  right: 4%;
  z-index: 1;

  ${({ $isVisible, $isInitalized }) =>
    $isInitalized &&
    css`
      animation: ${$isVisible ? fadeIn : fadeOut} 0.75s ease-out;
    `}
`;
