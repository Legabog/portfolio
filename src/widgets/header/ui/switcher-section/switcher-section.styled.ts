import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;

  @media only screen and (max-width: 800px) {
    justify-content: flex-start;
    margin: 50px 12px 20px 20px;
  }
`;
