import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 280px);

  @media only screen and (min-height: 900px) {
    height: 450px;
  }
`;
