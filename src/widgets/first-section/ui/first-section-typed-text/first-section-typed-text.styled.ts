import styled from 'styled-components';

import { COLORS } from '@shared/constants';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  z-index: 1;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const Title = styled.div`
  color: ${({ theme }) => theme.color};
`;
export const InnerTextWrapper = styled.div`
  width: 100%;
  margin-left: 20%;
  margin-bottom: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 96px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -4.8px;
  align-self: start;
  display: block;

  & > span:nth-child(2) {
    color: ${COLORS.orange};
  }
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
    margin: 70px 20px 0px 20px;
    font-size: 96px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 90px;
  }
  @media only screen and (max-width: 700px) {
    font-size: 84px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 78px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 50px;
  }
`;
export const Description = styled.div`
  font-size: 18px;
  margin-left: 6px;
  letter-spacing: 0px;
  color: ${COLORS.orange};

  @media only screen and (max-width: 1000px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
