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
const baseCard = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 0px;
  top: 0px;
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  padding: 16px;
  backface-visibility: hidden;
  transition: 0.9s;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  background-color: ${({ theme }) => theme.backgroundColor};
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
    path {
      fill: ${({ theme }) => theme.color};
    }
  }

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
`;
export const FrontWrapper = styled.div`
  ${baseCard}
`;
export const BackWrapper = styled.div`
  ${baseCard}
`;
export const CardWrapper = styled.div<{ $flip?: boolean }>`
  width: 100%;
  height: 152px;
  display: flex;
  cursor: pointer;
  position: relative;
  perspective: 4000px;

  ${FrontWrapper} {
    ${({ $flip }) =>
      $flip &&
      css`
        transform: rotateX(180deg);
      `}
  }
  ${BackWrapper} {
    transform: rotateX(${({ $flip }) => ($flip ? '1turn' : '180deg')});
  }

  @media only screen and (max-width: 1300px) {
    height: 162px;
  }
  @media only screen and (max-width: 450px) {
    height: 182px;
  }
`;
