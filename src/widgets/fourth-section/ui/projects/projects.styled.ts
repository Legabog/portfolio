import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 40px;
  width: 80%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${({ theme }) => theme.backgroundColor};

  @media only screen and (max-width: 900px) {
    width: calc(100% - 40px);
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
`;
