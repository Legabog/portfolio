import styled, { css, keyframes } from 'styled-components';

import { COLORS } from '@shared/constants';
import { Props } from '../../types';

const { orange, orangeSecondary } = COLORS;

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
`;
export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 73vh;
`;
export const InfoSection = styled.div`
  width: 80%;
`;
export const IconWrapper = styled.div<Pick<Props, 'overlappingType'>>`
  svg {
    width: 96px;
    height: 96px;
    ${({ overlappingType }) =>
      overlappingType === 'musicon' &&
      css`
        & path:nth-child(3) {
          fill: ${({ theme }) => theme.backgroundColor};
        }
      `};
  }
`;
export const TopNumber = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  color: ${orange};
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0px;
  gap: 18px;
`;
export const Title = styled.span`
  font-size: 96px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -3px;
  color: ${orange};
  height: fit-content;
`;
export const SecondaryTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  color: ${orange};
  margin-left: 3px;
  text-transform: uppercase;
  height: fit-content;
`;
export const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid ${orangeSecondary};
  color: ${orange};
  background-color: ${({ theme }) => theme.backgroundColor};
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  text-transform: uppercase;
`;
export const BlinkingStatus = styled.div<{ $isActive: boolean }>`
  width: 8px;
  height: 8px;
  background-color: ${orangeSecondary};
  border-radius: 50%;
  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${orange};
      animation: ${blink} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    `}
`;
export const Description = styled.span`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.description};

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
