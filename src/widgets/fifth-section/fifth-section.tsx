'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useObserverDetectSection } from '@shared/hooks';
import { SectionTitle } from '@shared/ui';
import { useFifthSectionStore } from '@widgets/fifth-section/model';
import { useSecondSectionStore } from '@widgets/second-section';
import { useThirdSectionStore } from '@widgets/third-section';
import { useFourthSectionStore } from '@widgets/fourth-section';
import { Wrapper } from './fifth-section.styled';
import { Carusel, TechnicalCards } from './ui';
import { TECHNOLOGIES, TOP_NUMBER } from './constants';

export const FifthSection: FC = () => {
  const { setIsIgnore: setIsIgnoreSecondSection } = useSecondSectionStore();
  const { setIsIgnore: setIsIgnoreThirdSection } = useThirdSectionStore();
  const { setIsIgnore: setIsIgnoreFourthSection } = useFourthSectionStore();
  const { isVisible, setIsVisible, isIgnore } = useFifthSectionStore();
  const ref = useObserverDetectSection(setIsVisible, isIgnore, [
    setIsIgnoreSecondSection,
    setIsIgnoreThirdSection,
    setIsIgnoreFourthSection,
  ]);
  const t = useTranslations(`FifthSection.FifthSectionTitle`);

  const title = t('text');

  return (
    <Wrapper ref={ ref } $isVisible={ isVisible } data-testid='fifth-section' id='fifth-section'>
      <SectionTitle title={ title } topNumber={ TOP_NUMBER } />
      <TechnicalCards />
      <Carusel caruselType='left' technologies={ TECHNOLOGIES } />
    </Wrapper>
  );
};
