import styled from 'styled-components';

export const Wrapper = styled.div<{ $calculatedHeight: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  height: calc(100vh - 240px);

  @media only screen and (min-height: 900px) {
    height: 450px;
  }
`;
