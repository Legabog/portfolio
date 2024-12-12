import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;
  width: 80%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
