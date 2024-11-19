import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 300px);

  @media only screen and (max-width: 1400px) {
    height: calc(100vh - 350px);
  }
  @media only screen and (max-width: 1300px) {
    height: calc(100vh - 400px);
  }
  @media only screen and (max-width: 1200px) {
    height: calc(100vh - 450px);
  }
  @media only screen and (max-width: 1000px) {
    height: calc(100vh - 500px);
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 500px;
  }
  @media only screen and (max-width: 650px) {
    height: 450px;
  }
  @media only screen and (max-width: 550px) {
    height: 400px;
  }
  @media only screen and (max-width: 550px) {
    height: 350px;
  }
  @media only screen and (max-width: 450px) {
    height: 300px;
  }
  @media only screen and (max-width: 400px) {
    height: 250px;
  }
`;
