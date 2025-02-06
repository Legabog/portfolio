import styled, { css } from 'styled-components';

import { COLORS } from '@shared/constants';
import { Props } from '../../types';

const { orangeSecondary } = COLORS;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 100%;
  z-index: -2;
  visibility: hidden;
  transform: translateX(-50%);

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 1px;
    content: '';
    background: ${orangeSecondary};
    transform: translateX(-50%);
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
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${orangeSecondary};
  border-radius: 100%;
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
