import styled from 'styled-components';
import { COLORS } from '@shared/constants';

const { orangeSecondary } = COLORS;

export const Wrapper = styled.div`
  margin-top: 80px;
  width: 80%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid ${orangeSecondary};
  border-bottom: 1px solid ${orangeSecondary};
`;
export const LeftPart = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 408px;
  padding: 120px 0 132px;
`;
export const Title = styled.div`
  color: ${({ theme }) => theme.color};
  width: 80%;
  display: flex;
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
    font-size: 52px;
    letter-spacing: -2.6px;
  }
  @media only screen and (max-width: 330px) {
    font-size: 42px;
  }
`;
export const RightPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const IconWrapper = styled.div`
  position: sticky;
  top: 0;
  margin-top: 100px;
`;
export const IconWrapperSecondary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${orangeSecondary};
  box-sizing: border-box;
  cursor: pointer;

  & svg {
    width: 64px;
    height: 64px;
  }
`;
export const Seperator = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  transform: translateX(-50%);
  left: 100%;
  z-index: -2;

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    transform: translateX(-50%);
    content: '';
    left: 50%;
    width: 1px;
    background: ${orangeSecondary};
  }
`;
