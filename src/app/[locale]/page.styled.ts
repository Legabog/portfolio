import styled from 'styled-components';

import { COLORS } from '@shared/constants';

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  order: 1;
  flex: 1;
  pointer-events: none;

  @media only screen and (max-aspect-ratio: 8/7) {
    order: 2;
    align-items: flex-start;
    min-height: 20vh;
  }
  @media only screen and (max-width: 400px) {
    min-height: 30vh;
  }
`;
export const InnerTextWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > span:nth-child(1) {
    color: ${COLORS.orange};
    font-size: 36px;
    font-weight: 600;
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
export const CanvasWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;
  flex: 1;
  min-height: 100vh;

  @media only screen and (max-aspect-ratio: 8/7) {
    order: 1;
    min-height: calc(80vh - 84px);
    canvas {
      height: calc(80vh - 84px);
    }
  }
  @media only screen and (max-width: 400px) {
    min-height: calc(70vh - 84px);
    canvas {
      height: calc(70vh - 84px);
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
