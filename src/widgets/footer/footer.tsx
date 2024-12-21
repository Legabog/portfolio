'use client';

import { FC } from 'react';

import { IconSection, InfoSection, Rights } from './ui';
import { Wrapper } from './footer.styled';

export const Footer: FC = () => (
  <Wrapper data-testid='footer'>
    <IconSection />
    <InfoSection />
    <Rights />
  </Wrapper>
);
