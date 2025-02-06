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
  justify-content: space-between;
  width: 100%;
  height: 100vh;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${fadeIn} 1s ease-out;
    `}
`;
export const SecondaryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;

  @media only screen and (width <= 900px) {
    width: 100%;
  }
`;
