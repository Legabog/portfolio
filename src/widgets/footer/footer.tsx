'use client';

import { FC } from 'react';

import { IconSection, Rights, Socials } from './ui';
import { Wrapper } from './footer.styled';

export const Footer: FC = () => (
  <Wrapper data-testid='footer'>
    <IconSection />
    <Socials />
    <Rights />
  </Wrapper>
);
