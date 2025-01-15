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
  margin-top: 40px;
  width: 80%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${({ theme }) => theme.backgroundColor};
  animation: ${fadeIn} 1s ease-out;

  @media only screen and (max-width: 900px) {
    width: calc(100% - 40px);
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
`;
