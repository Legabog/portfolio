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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

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

  @media only screen and (max-width: 900px) {
    height: auto;
  }
`;
export const SecondaryWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 40px;

  @media only screen and (max-width: 1300px) {
    gap: 20px;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: auto;
    margin-top: 16px;
    flex-direction: column;
    gap: 0px;
  }
`;
