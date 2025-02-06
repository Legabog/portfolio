import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media only screen and (width <= 900px) {
    width: 100%;
    height: 400px;
  }

  @media only screen and (width <= 550px) {
    height: 350px;
  }

  @media only screen and (width <= 450px) {
    height: 300px;
  }

  @media only screen and (width <= 400px) {
    height: 250px;
  }
`;
