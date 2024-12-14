import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MusicOnWrapper = styled.div`
  & path:nth-child(3) {
    fill: ${({ theme }) => theme.backgroundColor};
  }
`;
