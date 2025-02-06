import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const Wrapper = styled.div<{ $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${fadeIn} 1s ease-out;
    `}
`;
