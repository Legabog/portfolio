import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    width: 100%;

    & > div {
      margin-bottom: 50px;
    }
    & > div:last-child {
      margin-bottom: 0px;
    }
    & > div:first-child {
      margin-bottom: 20px;
    }
  }
`;
export const MusicOnWrapper = styled.div`
  & path:nth-child(3) {
    fill: ${({ theme }) => theme.backgroundColor};
  }
`;
