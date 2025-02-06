import styled, { keyframes } from 'styled-components';

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
export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.backgroundColor};
  animation: ${fadeIn} 1s ease-out;

  @media only screen and (width <= 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 40px);
    margin-top: 16px;
    background-color: transparent;
  }
`;
