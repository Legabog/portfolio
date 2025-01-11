import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media only screen and (max-width: 900px) {
    width: calc(100% - 40px);
    flex-direction: column;
    margin-top: 20px;
  }
`;
