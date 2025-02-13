import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 80%;
  color: ${({ theme }) => theme.color};
  font-size: 96px;
  font-weight: 400;
  line-height: 1;
  margin-top: 40px;
  letter-spacing: -4.8px;
  user-select: none;

  & span:nth-child(2) {
    margin-left: 35px;
  }

  @media only screen and (width <= 1500px) {
    font-size: 90px;
  }

  @media only screen and (width <= 1300px) {
    font-size: 78px;
  }

  @media only screen and (width <= 1200px) {
    font-size: 72px;
  }

  @media only screen and (width <= 1100px) {
    font-size: 60px;
  }

  @media only screen and (width <= 1000px) {
    font-size: 66px;
  }

  @media only screen and (width <= 950px) {
    font-size: 60px;
  }

  @media only screen and (width <= 900px) {
    width: calc(100% - 40px);
    margin: 50px 20px 0;
    font-size: 52px;
    letter-spacing: -2.6px;
  }

  @media only screen and (width <= 330px) {
    font-size: 42px;
  }
`;
export const TopNumber = styled.span`
  position: absolute;
  top: 15px;
  display: flex;
  color: ${({ theme }) => theme.color};
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0;
  white-space: break-spaces;

  @media only screen and (width <= 1300px) {
    top: 10px;
  }

  @media only screen and (width <= 1100px) {
    top: 8px;
  }
`;
