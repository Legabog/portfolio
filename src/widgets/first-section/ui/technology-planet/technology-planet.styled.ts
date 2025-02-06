import styled from 'styled-components';

export const Wrapper = styled.div<{ $calculatedHeight: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;

  &&& > div {
    margin-bottom: 150px;
  }

  @media only screen and (width <= 900px) {
    width: 100%;
    height: ${({ $calculatedHeight }) => $calculatedHeight};
  }
`;
