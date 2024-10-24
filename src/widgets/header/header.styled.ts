import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: calc(100% - 40px);
  margin: 12px 20px;
  z-index: 2;
`;
