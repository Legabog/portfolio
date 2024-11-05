import styled from 'styled-components';

export const Wrapper = styled.div<{ $marginBottom: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;

  &&& > div {
    margin-bottom: 150px;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    &&& > div {
      margin-bottom: ${({ $marginBottom }) => $marginBottom};
    }
  }
  /* @media only screen and (max-width: 400px) {
    &&& > div {
      margin-bottom: 550px;
    }
  } */
  /* @media only screen and (max-width: 800px) {
    width: 950px;
    height: 950px;

  } */
  /* @media only screen and (max-width: 700px) {
    width: 800px;
    height: 800px;

    &&& > div {
      margin-bottom: 350px;
    }
  } */
  /* @media only screen and (max-width: 600px) {
    width: 700px;
    height: 700px;

    &&& > div {
      margin-bottom: 350px;
    }
  } */
  /* @media only screen and (max-width: 500px) {
    width: 600px;
    height: 600px;

    &&& > div {
      margin-bottom: 350px;
    }
  } */
  /* @media only screen and (max-width: 400px) {
    width: 500px;
    height: 500px;

    &&& > div {
      margin-bottom: 350px;
    }
  } */
  /* @media only screen and (max-width: 300px) {
    width: 400px;
    height: 400px;

    &&& > div {
      margin-bottom: 350px;
    }
  } */
`;
