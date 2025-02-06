import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (width <= 900px) {
    justify-content: flex-start;
    margin: 5% 20px;
  }

  @media only screen and (width <= 600px) {
    margin: 10% 20px;
  }
`;
