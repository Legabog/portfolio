import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 400px;
  }
  @media only screen and (max-width: 550px) {
    width: 100%;
    height: 350px;
  }
`;
