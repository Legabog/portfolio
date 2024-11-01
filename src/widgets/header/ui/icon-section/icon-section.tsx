'use client';

import { FC } from 'react';

import { MainIcon } from '@shared/ui';
import { Wrapper } from './icon-section.styled';
import { Props } from './types';

export const IconSection: FC<Props> = ({ isMobile }) => (
  <Wrapper $isMobile={ isMobile } data-testid='icon-section'>
    <MainIcon />
  </Wrapper>
);
