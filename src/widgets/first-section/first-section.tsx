'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { useObserverDetectSection } from '@shared/hooks';
import { Loader, ScrollDown } from '@shared/ui';
import { NavigateButton } from '@widgets/navigate-button';
import { Wrapper, SecondaryWrapper } from './first-section.styled';
import { FirstSectionTypedText } from './ui';
import { CUSTOM_STYLES_SCROLL_DOWN, SECTION_NUMBER_SCROLL_DOWN } from './constants';
import { useFirstSectionStore } from './model';

const TechnologyPlanet = dynamic(() => import('./ui/technology-planet'), {
  loading: () => <Loader />,
  ssr: false,
});

export const FirstSection: FC = () => {
  const { isVisible, setIsVisible } = useFirstSectionStore();
  const ref = useObserverDetectSection(setIsVisible);
  const t = useTranslations('FirstSection.ScrollDown');

  const sectionText = t('text');

  return (
    <Wrapper ref={ ref } $isVisible={ isVisible } data-testid='first-section' id='first-section'>
      <SecondaryWrapper>
        <FirstSectionTypedText />
        <TechnologyPlanet />
      </SecondaryWrapper>
      <NavigateButton />
      <ScrollDown
        customStyles={ CUSTOM_STYLES_SCROLL_DOWN }
        sectionNumber={ SECTION_NUMBER_SCROLL_DOWN }
        sectionText={ sectionText }
      />
    </Wrapper>
  );
};
