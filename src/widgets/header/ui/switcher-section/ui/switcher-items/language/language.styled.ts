import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-self: center;
  justify-content: center;
  padding-right: 20px;

  @media screen and (width <= 900px) {
    gap: 20px;
    padding-right: 40px;
  }

  @media screen and (width <= 450px) {
    padding-right: 20px;
  }
`;
