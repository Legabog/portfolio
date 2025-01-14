'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { SectionTitle } from '@shared/ui';
import { Wrapper } from './fifth-section.styled';
import { Carusel, Cards } from './ui';
import { TECHNOLOGIES, TOP_NUMBER } from './constants';

export const FifthSection: FC = () => {
  const t = useTranslations(`FifthSection.FifthSectionTitle`);

  const title = t('text');

  return (
    <Wrapper data-testid='fifth-section' id='fifth-section'>
      <SectionTitle title={ title } topNumber={ TOP_NUMBER } />
      <Cards />
      <Carusel caruselType='left' technologies={ TECHNOLOGIES } />
    </Wrapper>
  );
};
