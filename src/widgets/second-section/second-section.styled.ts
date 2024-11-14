import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const SecondaryWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 40px;

  @media only screen and (max-width: 1300px) {
    gap: 20px;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    margin-top: 16px;
    flex-direction: column;
    gap: 0px;
  }
`;
