import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-top: 40px;

  @media only screen and (width <= 900px) {
    flex-direction: column;
    width: calc(100% - 40px);
    margin-top: 20px;
  }
`;
