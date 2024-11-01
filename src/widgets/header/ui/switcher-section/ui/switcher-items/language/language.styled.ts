import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: cemter;
  gap: 8px;
  padding-right: 20px;

  @media screen and (max-width: 900px) {
    gap: 20px;
    padding-right: 40px;
  }
  @media screen and (max-width: 450px) {
    padding-right: 20px;
  }
`;
