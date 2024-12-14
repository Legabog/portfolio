import styled, { css } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const FrontText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;
export const FrontTitle = styled.span`
  transition: 0.9s;
  font-size: 50px;
  line-height: 62px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
`;
export const FrontDescription = styled.span`
  transition: 0.9s;
  font-size: 22px;
  line-height: 40px;
  font-weight: 300;
  color: ${({ theme }) => theme.description};
`;
export const TechnologyWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 48px;
    height: 48px;
  }
`;
export const TechnologyTitle = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0px;
  text-transform: uppercase;
  margin: 0px 8px 0px 5px;
  color: ${({ theme }) => theme.description};
`;
export const FrontHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.description};
  transition: 0.9s;
  text-transform: uppercase;
`;
export const FrontBody = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 150px;
    height: 150px;

    path {
      fill: ${orange};
    }
  }
`;
export const FrontFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    border-right: 1px solid rgb(232, 176, 89);
  }
  div:last-child {
    border-right: none;
  }
`;
const baseCard = css`
  display: flex;
  position: absolute;
  position: absolute;
  left: 0px;
  top: 0px;
  width: calc(100% - 64px);
  height: 100%;
  padding: 32px;
  backface-visibility: hidden;
  transition: 0.9s;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  background-color: ${({ theme }) => theme.backgroundColor};
  cursor: pointer;

  &:hover {
    border: 1px solid ${orange};
    ${FrontHeader} {
      color: ${orange};
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
