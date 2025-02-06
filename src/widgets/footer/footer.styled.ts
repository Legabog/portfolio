import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: calc(100% - 40px);
  margin: 80px 20px 20px;

  @media only screen and (width <= 900px) {
    margin-top: 50px;
  }

  @media only screen and (width <= 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const MobileWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
