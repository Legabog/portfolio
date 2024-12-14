import styled, { css } from 'styled-components';

import { COLORS } from '@shared/constants';
import { Props } from '../../types';

const { orangeSecondary } = COLORS;

export const Wrapper = styled.div`
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
export const StickyObject = styled.div`
  position: sticky;
  top: 0;
  margin-top: 150px;
`;
export const IconWrapper = styled.div<{ $overlappingType: Props['overlappingType'] }>`
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
  ${({ $overlappingType }) =>
    $overlappingType === 'musicon' &&
    css`
      & path:nth-child(3) {
        fill: ${({ theme }) => theme.backgroundColor};
      }
    `};
`;
