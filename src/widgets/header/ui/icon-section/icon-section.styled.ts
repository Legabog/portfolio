import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 460px) {
    align-items: start;
  }
`;
