'use client';

import { FC } from 'react';

import { Wrapper } from './fifth-section.styled';
import { FifthSectionTitle } from './ui';

export const FifthSection: FC = () => (
  <Wrapper data-testid='fifth-section'>
    <FifthSectionTitle />
  </Wrapper>
);
