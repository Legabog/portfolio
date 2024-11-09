import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin-top: 80px;
  font-size: 96px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -4.8px;
  color: ${({ theme }) => theme.color};

  @media only screen and (max-width: 1500px) {
    font-size: 90px;
  }
  @media only screen and (max-width: 1400px) {
    font-size: 84px;
  }
  @media only screen and (max-width: 1300px) {
    font-size: 78px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 72px;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 66px;
  }
  @media only screen and (max-width: 950px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 900px) {
    width: calc(100% - 40px);
    margin: 50px 20px 0px 20px;
    font-size: 52px;
    letter-spacing: -2.6px;
  }
  @media only screen and (max-width: 330px) {
    font-size: 42px;
  }
`;
