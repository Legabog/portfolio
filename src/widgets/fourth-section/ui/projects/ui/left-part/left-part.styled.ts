import styled, { css, keyframes } from 'styled-components';
import Image from 'next/image';

import { COLORS } from '@shared/constants';
import { Props } from './types';

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
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  overflow: clip;
`;
export const CardWrapper = styled.div`
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
export const TopNumber = styled.span`
  display: flex;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.description};
  margin-bottom: 3px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Title = styled.span`
  color: ${({ theme }) => theme.color};
  font-size: 60px;
  line-height: 60px;
  font-weight: 600;
  height: fit-content;

  & > span:nth-child(2) {
    color: ${orange};
  }
`;
export const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid ${orangeSecondary};
  color: ${orange};
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 6px;
  font-size: 14px;
  letter-spacing: 0.02em;
  line-height: 150%;
  padding: 3px 6px;
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
export const SeperatorWrapper = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  transform: translateX(-50%);
  left: 100%;
  z-index: -2;

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    transform: translateX(-50%);
    content: '';
    left: 50%;
    width: 1px;
    background: ${orangeSecondary};
  }
`;
export const Seperator = styled.div`
  position: sticky;
  top: 0;
  margin-top: 150px;
`;
export const IconWrapper = styled.div<
  Pick<Props, 'overlappingType'> & { $isCenterWrapper?: boolean }
>`
  svg {
    width: 64px;
    height: 64px;
    ${({ overlappingType }) =>
      overlappingType === 'musicon' &&
      css`
        & path:nth-child(3) {
          fill: ${({ theme }) => theme.backgroundColor};
        }
      `};
  }
  ${({ $isCenterWrapper }) =>
    $isCenterWrapper &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 130px;
      height: 130px;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.backgroundColor};
      border: 1px solid ${orangeSecondary};
      box-sizing: border-box;
      cursor: pointer;

      svg {
        width: 64px;
        height: 64px;
      }
    `}
`;
export const StyledImage = styled(Image)<{ $customStyles?: string }>`
  pointer-events: none;
  z-index: -2;
  position: absolute;
  object-fit: fill;
  top: 0;

  ${({ $customStyles }) =>
    $customStyles &&
    css`
      ${$customStyles}
    `}
`;
