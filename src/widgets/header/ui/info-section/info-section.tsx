'use client';

import { FC } from 'react';

import { InfoSectionItem } from './ui';
import { INFO_ITEMS } from './constants';
import { Wrapper } from './info-section.styled';

export const InfoSection: FC = () => (
  <Wrapper data-testid='info-section'>
    {INFO_ITEMS.map((itemProps) => (
      <InfoSectionItem key={ itemProps.id } { ...itemProps } />
    ))}
  </Wrapper>
);
