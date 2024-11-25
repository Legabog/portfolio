'use client';

import { FC } from 'react';

import { Wrapper } from './fourth-section.styled';
import { FourthSectionTitle, Projects } from './ui';

export const FourthSection: FC = () => (
  <Wrapper data-testid='fourth-section'>
    <FourthSectionTitle />
    <Projects />
  </Wrapper>
);
