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
  align-items: center;
  justify-content: center;
  height: 73vh;
`;
export const InfoSection = styled.div`
  width: 80%;
`;
export const IconWrapper = styled.div<{ $overlappingType: Props['overlappingType'] }>`
  svg {
    width: 96px;
    height: 96px;
    ${({ $overlappingType }) =>
      $overlappingType === 'musicon' &&
      css`
        & path:nth-child(3) {
          fill: ${({ theme }) => theme.backgroundColor};
        }
      `};
  }

  @media only screen and (width <= 1200px) {
    svg {
      width: 80px;
      height: 80px;
    }
  }
`;
export const TopNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  color: ${({ theme }) => theme.color};
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0;
`;
export const SectionWrapper = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  margin: 8px 0;
`;
export const Title = styled.span`
  height: fit-content;
  color: ${orange};
  font-size: 96px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -3px;

  @media only screen and (width <= 1400px) {
    font-size: 86px;
  }

  @media only screen and (width <= 1300px) {
    font-size: 64px;
  }

  @media only screen and (width <= 1000px) {
    font-size: 58px;
  }
`;
export const SecondaryTitle = styled.span`
  height: fit-content;
  color: ${({ theme }) => theme.color};
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  margin-left: 3px;
  text-transform: uppercase;
  letter-spacing: 0;

  @media only screen and (width <= 1200px) {
    font-size: 18px;
    line-height: 18px;
  }

  @media only screen and (width <= 1200px) {
    font-size: 16px;
    line-height: 16px;
  }
`;
export const Badge = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${orange};
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  border: 1px solid ${orangeSecondary};
  border-radius: 6px;
  gap: 6px;
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
