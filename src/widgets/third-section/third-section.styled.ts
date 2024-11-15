import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    height: auto;
  }
`;
export const SecondaryWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  /* margin-top: 40px; */

  @media only screen and (max-width: 900px) {
    width: 100%;
    height: auto;
    margin-top: 16px;
  }
`;
