import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;

  @media only screen and (max-width: 900px) {
    justify-content: flex-start;
    margin: 5% 20px 5% 20px;
  }
  @media only screen and (max-width: 600px) {
    margin: 10% 20px 10% 20px;
  }
`;
