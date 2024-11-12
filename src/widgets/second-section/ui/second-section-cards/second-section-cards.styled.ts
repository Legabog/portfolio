import styled, { css } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 8px;

  @media only screen and (max-width: 900px) {
    width: calc(100% - 40px);
    margin: 16px 20px;
  }
`;
export const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0px;
  margin-top: 16px;
  color: ${({ theme }) => theme.color};
  text-transform: uppercase;
`;
export const Description = styled.span`
  margin-top: 8px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.description};

  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
export const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Number = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.description};
`;
export const CardWrapper = styled.div<{ $flip?: boolean }>`
  width: calc(100% - 32px);
  height: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 16px;
  cursor: pointer;
  transition: 150ms;
  transform-style: preserve-3d;
  transform: rotateX(0deg) translateX(0deg);

  &:hover {
    border: 1px solid ${orange};
    filter: brightness(1.05);
    path {
      fill: ${orange};
    }
    ${Number} {
      color: ${orange};
    }
  }
  ${({ $flip }) =>
    $flip &&
    css`
      transform: rotateX(180deg);
    `}

  @media only screen and (max-width: 900px) {
    width: calc(100% - 40px);
  }
`;
export const FrontWrapper = styled.div<{ $flip?: boolean }>`
  width: 100%;
  display: ${({ $flip }) => (!$flip ? 'flex' : 'none')};
  align-items: flex-start;
  flex-direction: column;

  svg {
    width: 32px;
    height: 32px;
    path {
      fill: ${({ theme }) => theme.color};
    }
  }
  ${({ $flip }) =>
    $flip &&
    css`
      transform: rotateX(180deg);
    `}

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const BackWrapper = styled.div<{ $flip?: boolean }>`
  width: 100%;
  display: ${({ $flip }) => ($flip ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ $flip }) =>
    $flip &&
    css`
      transform: rotateX(180deg);
    `}

  & > span:nth-child(1) {
    visibility: ${({ $flip }) => (!$flip ? 'hidden' : 'visible')};
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
  & > span:nth-child(2) {
    visibility: ${({ $flip }) => (!$flip ? 'hidden' : 'visible')};
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
