import styled, { keyframes } from 'styled-components';
import { TypeAnimation } from 'react-type-animation';

import { COLORS } from '@shared/constants';

const { orange, greySecondary, orangeSecondary } = COLORS;

const blink = keyframes`
  0% { 
    color: ${greySecondary};
  }
  50% {
    color: ${orangeSecondary};
  }
  100% {
    color: ${orange};
  }
`;
export const Wrapper = styled.div`
  width: 80%;
  margin-top: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    width: calc(100% - 40px);
    margin: 50px 20px 0px 20px;
  }
`;
export const StyledTypeAnimation = styled(TypeAnimation)`
  font-size: 96px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -4.8px;
  color: ${({ theme }) => theme.color};
  margin-left: 35px;

  @media only screen and (max-width: 1500px) {
    font-size: 90px;
    & span:nth-child(2) {
      margin-left: 40px;
    }
  }
  @media only screen and (max-width: 1300px) {
    font-size: 78px;
    & span:nth-child(2) {
      margin-left: 45px;
    }
  }
  @media only screen and (max-width: 1200px) {
    font-size: 72px;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 60px;
    & span:nth-child(2) {
      margin-left: 50px;
    }
  }
  @media only screen and (max-width: 1000px) {
    font-size: 66px;
  }
  @media only screen and (max-width: 950px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 52px;
    letter-spacing: -2.6px;
  }
  @media only screen and (max-width: 330px) {
    font-size: 42px;
  }
`;
export const DescriptionWrapper = styled.div`
  margin-top: 8px;
  margin-left: 6px;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  text-transform: uppercase;
  gap: 8px;

  @media only screen and (max-width: 1000px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 330px) {
    font-size: 12px;
  }
`;
export const FirstPart = styled.span`
  color: ${({ theme }) => theme.description};
`;
export const SecondPart = styled.span`
  margin-left: 8px;
  color: ${orange};
`;
export const AnimatedTitle = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin-left: 6px;
  text-transform: uppercase;
  animation: ${blink} 1s ease-in-out infinite;

  @media only screen and (max-width: 900px) {
    margin-top: 8px;
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
  cursor: pointer;

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
