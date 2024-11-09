import styled from 'styled-components';

import { COLORS } from '@shared/constants';

export const Wrapper = styled.div`
  display: flex;
  pointer-events: none;
  width: 50%;
`;
export const InnerTextWrapper = styled.div`
  width: 80%;
  margin-left: -100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > span:nth-child(1) {
    color: ${COLORS.orange};
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.56px;
    font-weight: 400;
    align-self: start;

    @media only screen and (max-width: 500px) {
      font-size: 22px;
    }
    @media only screen and (max-width: 400px) {
      font-size: 20px;
    }
  }
  & > span:nth-child(2) {
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 32px;
    font-weight: 600;
    align-self: start;
    display: block;

    @media only screen and (max-width: 500px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 400px) {
      font-size: 16px;
    }
  }
`;
export const Description = styled.span`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.discription};

  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
