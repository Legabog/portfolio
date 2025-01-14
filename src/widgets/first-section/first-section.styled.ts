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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${fadeIn} 1s ease-out;
    `}
`;
export const SecondaryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
