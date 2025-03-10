import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 300px);

  @media only screen and (height >= 900px) {
    height: 450px;
  }
`;
