import styled from 'styled-components';
import { COLORS } from '@shared/constants';

export const Wrapper = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 40px;
  font-size: 96px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -4.8px;
  color: ${({ theme }) => theme.color};
  user-select: none;

  & span:nth-child(2) {
    margin-left: 35px;
  }

  @media only screen and (max-width: 1500px) {
    font-size: 90px;
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
export const TopNumber = styled.span`
  position: absolute;
  top: 15px;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.color};
  text-transform: uppercase;
  white-space: break-spaces;

  &:hover {
    color: ${COLORS.orange};
  }

  @media only screen and (max-width: 1300px) {
    top: 10px;
  }
  @media only screen and (max-width: 1100px) {
    top: 8px;
  }
`;
