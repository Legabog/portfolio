'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useObserverDetectSection } from '@shared/hooks';
import { SectionTitle } from '@shared/ui';
import { useFifthSectionStore } from '@widgets/fifth-section/model';
import { Wrapper } from './fifth-section.styled';
import { Carusel, Cards } from './ui';
import { TECHNOLOGIES, TOP_NUMBER } from './constants';

export const FifthSection: FC = () => {
  const { isVisible, setIsVisible } = useFifthSectionStore();
  const ref = useObserverDetectSection(setIsVisible);
  const t = useTranslations(`FifthSection.FifthSectionTitle`);

  const title = t('text');

  return (
    <Wrapper ref={ ref } $isVisible={ isVisible } data-testid='fifth-section' id='fifth-section'>
      <SectionTitle title={ title } topNumber={ TOP_NUMBER } />
      <Cards />
      <Carusel caruselType='left' technologies={ TECHNOLOGIES } />
    </Wrapper>
  );
};
