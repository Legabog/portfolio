'use client';

import { FC } from 'react';

import { InfoSectionItem } from './ui';
import { INFO_ITEMS } from './constants';
import { RootWrapper, TitleWrapper, Wrapper, Text } from './info-section.styled';

export const InfoSection: FC = () => (
  <RootWrapper>
    <TitleWrapper>
      <Text>'/// Social Media'</Text>
    </TitleWrapper>
    <Wrapper data-testid='footer-info-section'>
      {INFO_ITEMS.map((itemProps) => (
        <InfoSectionItem key={ itemProps.id } { ...itemProps } />
      ))}
    </Wrapper>
  </RootWrapper>
);
