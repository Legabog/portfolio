import styled, { css } from 'styled-components';
import { TypeAnimation } from 'react-type-animation';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

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

  /* @media only screen and (max-width: 600px) {
    font-size: 12px;
    line-height: 18px;
  } */
`;
export const StyledTypeAnimation = styled(TypeAnimation)`
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0px;
  margin-top: 16px;
  color: ${({ theme }) => theme.color};
  text-transform: uppercase;
`;
export const TopSection = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
`;
export const TopSectionText = styled.span<{ $type: 'number' | 'text' }>`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.description};
  text-transform: uppercase;

  ${({ $type }) =>
    $type === 'text' &&
    css`
      font-weight: 400;
      font-size: 14px;
      align-self: center;
    `}
`;
export const CardWrapper = styled.div<{ $flip?: boolean }>`
  width: calc(100% - 32px);
  height: 120px;
  display: flex;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 16px;
  cursor: pointer;
  transition: 500ms;
  transform-style: preserve-3d;
  transform: rotateX(0deg) translateX(0deg);

  &:hover {
    border: 1px solid ${orange};
    filter: brightness(1.05);
    path {
      fill: ${orange};
    }
    ${TopSectionText} {
      color: ${orange};
    }
  }
  ${({ $flip }) =>
    $flip &&
    css`
      transform: rotateX(180deg);
    `}

  @media only screen and (max-width: 1300px) {
    height: 130px;
  }
  @media only screen and (max-width: 900px) {
    width: calc(100% - 40px);
  }
  @media only screen and (max-width: 400px) {
    height: 150px;
  }
`;
export const FrontWrapper = styled.div<{ $flip?: boolean }>`
  width: 100%;
  display: ${({ $flip }) => (!$flip ? 'flex' : 'none')};
  visibility: ${({ $flip }) => ($flip ? 'hidden' : 'visible')};
  transition: visibility 500 linea;
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
  visibility: ${({ $flip }) => (!$flip ? 'hidden' : 'visible')};
  transition: visibility 500 linea;
  flex-direction: column;
  align-items: flex-start;

  ${({ $flip }) =>
    $flip &&
    css`
      transform: rotateX(180deg);
    `}

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
