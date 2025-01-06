'use client';

import { FC } from 'react';

import { Wrapper } from './fifth-section.styled';
import { Carusel, FifthSectionTitle } from './ui';
import { TECHNOLOGIES } from './constants';

export const FifthSection: FC = () => (
  <Wrapper data-testid='fifth-section' id='fifth-section'>
    <FifthSectionTitle />
    <Carusel caruselType='left' technologies={ TECHNOLOGIES } />
  </Wrapper>
);
