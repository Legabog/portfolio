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
export const Wrapper = styled.div<{ $isFullHeight: boolean; $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${({ $isFullHeight }) =>
    $isFullHeight &&
    css`
      height: 100vh;
    `}
  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${fadeIn} 1s ease-out;
    `} 

  @media only screen and (width <= 900px) {
    height: auto;
  }
`;
export const SecondaryWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  width: 80%;
  margin-top: 40px;

  @media only screen and (width <= 1300px) {
    gap: 20px;
  }

  @media only screen and (width <= 900px) {
    flex-direction: column;
    gap: 0;
    width: 100%;
    height: auto;
    margin-top: 16px;
  }
`;
