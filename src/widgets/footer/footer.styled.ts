import styled from 'styled-components';

export const Wrapper = styled.div`
  width: calc(100% - 40px);
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 80px 20px 20px 20px;

  @media only screen and (max-width: 900px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
