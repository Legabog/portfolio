import styled, { css } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange, orangeSecondary } = COLORS;

export const FrontHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.description};
  transition: 0.9s;
  text-transform: uppercase;
`;
export const FrontBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.9s;

  h3 {
    font-size: 48px;
    line-height: 56px;
    color: ${({ theme }) => theme.color};
  }
  svg {
    width: 150px;
    height: 150px;
    margin-right: 16px;

    path {
      fill: ${orangeSecondary};
    }
  }
`;
export const FrontFooter = styled.div``;
const baseCard = css`
  display: flex;
  position: absolute;
  position: absolute;
  left: 0px;
  top: 0px;
  width: calc(100% - 32px);
  height: 100%;
  padding: 16px;
  backface-visibility: hidden;
  transition: 0.9s;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  background-color: ${({ theme }) => theme.backgroundColor};
  cursor: pointer;

  &:hover {
    border: 1px solid ${orange};
    filter: brightness(1.05);
    path {
      fill: ${orange};
    }
    ${FrontHeader} {
      color: ${orange};
    }
    ${FrontBody} {
      path {
        fill: ${orange};
      }
    }
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150vh;
`;
export const Front = styled.div`
  flex-direction: column;
  justify-content: space-between;
  ${baseCard}
`;
export const Back = styled.div`
  flex-direction: column;
  ${baseCard}
`;
export const Card = styled.div<{ $isFliped: boolean }>`
  width: 100%;
  height: 50vh;
  display: flex;
  position: relative;
  perspective: 4000px;
  margin: 0px 32px;

  ${Front} {
    ${({ $isFliped }) =>
      $isFliped &&
      css`
        transform: rotateY(180deg);
      `}
  }
  ${Back} {
    transform: rotateY(${({ $isFliped }) => ($isFliped ? '1turn' : '180deg')});
  }
`;
