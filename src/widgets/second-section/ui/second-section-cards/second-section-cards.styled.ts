import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 50%;

  @media only screen and (width <= 900px) {
    width: calc(100% - 40px);
    margin: 16px 20px;
  }
`;
