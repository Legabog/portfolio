import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: calc(100% - 40px);
  margin: 12px 20px;

  @media only screen and (width <= 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;
