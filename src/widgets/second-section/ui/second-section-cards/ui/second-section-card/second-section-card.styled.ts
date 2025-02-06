import styled, { css } from 'styled-components';
import { TypeAnimation } from 'react-type-animation';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const Title = styled.span`
  color: ${({ theme }) => theme.color};
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  margin-top: 16px;
  text-transform: uppercase;
  letter-spacing: 0;
`;
export const Description = styled.span`
  color: ${({ theme }) => theme.description};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-top: 8px;
`;
export const StyledTypeAnimation = styled(TypeAnimation)`
  color: ${({ theme }) => theme.color};
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  margin-top: 16px;
  text-transform: uppercase;
  letter-spacing: 0;
`;
export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 32px;
`;
export const TopSectionText = styled.span<{ $type: 'number' | 'text' }>`
  color: ${({ theme }) => theme.description};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-transform: uppercase;

  ${({ $type }) =>
    $type === 'text' &&
    css`
      align-self: center;
      font-size: 14px;
      font-weight: 400;
    `}
`;
const baseCard = css`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  padding: 16px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 10px;
  transition: 0.9s;
  cursor: pointer;
  overflow: hidden;
  backface-visibility: hidden;

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
  position: relative;
  display: flex;
  width: 100%;
  height: 152px;
  cursor: pointer;
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

  @media only screen and (width <= 1300px) {
    height: 162px;
  }

  @media only screen and (width <= 450px) {
    height: 182px;
  }
`;
