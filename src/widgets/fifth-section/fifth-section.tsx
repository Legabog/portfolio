'use client';

import { FC } from 'react';

import { SectionTitle } from '@shared/ui';
import { Wrapper } from './fifth-section.styled';
import { Carusel, TechnicalCards } from './ui';
import { TECHNOLOGIES, TOP_NUMBER } from './constants';
import { useLogic } from './lib';

export const FifthSection: FC = () => {
  const { isVisible, ref, title } = useLogic();

  return (
    <Wrapper ref={ ref } $isVisible={ isVisible } data-testid='fifth-section' id='fifth-section'>
      <SectionTitle title={ title } topNumber={ TOP_NUMBER } />
      <TechnicalCards />
      <Carusel caruselType='left' technologies={ TECHNOLOGIES } />
    </Wrapper>
  );
};
