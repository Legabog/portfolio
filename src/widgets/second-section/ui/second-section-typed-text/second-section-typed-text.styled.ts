import styled from 'styled-components';

import { COLORS } from '@shared/constants';

const { orangeSecondary } = COLORS;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  pointer-events: none;
  width: 50%;
  margin-left: -100px;
  gap: 8px;

  @media only screen and (max-width: 900px) {
    width: calc(100% - 40px);
    margin: 16px 20px;
  }
`;
export const InnerTextWrapper = styled.div`
  width: calc(100% - 142px);
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${orangeSecondary};
  padding: 16px;

  @media only screen and (max-width: 900px) {
    width: calc(100% - 40px);
  }

  & > span:nth-child(1) {
    color: ${({ theme }) => theme.color};
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -1.6px;
    font-weight: 400;
    align-self: start;

    @media only screen and (max-width: 700px) {
      font-size: 28px;
    }
    @media only screen and (max-width: 600px) {
      font-size: 24px;
    }
    @media only screen and (max-width: 500px) {
      font-size: 20px;
    }
    @media only screen and (max-width: 400px) {
      font-size: 16px;
    }
  }
  /* & > span:nth-child(2) {
    color: ${({ theme }) => theme.colorSecondary};
    font-size: 32px;
    font-weight: 600;
    align-self: start;
    display: block;

    @media only screen and (max-width: 700px) {
      font-size: 28px;
    }
    @media only screen and (max-width: 600px) {
      font-size: 22px;
    }
    @media only screen and (max-width: 500px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 400px) {
      font-size: 16px;
    }
  } */
`;
export const Description = styled.span`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.description};

  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
