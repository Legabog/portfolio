'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { Loader, ScrollDown } from '@shared/ui';
import { Wrapper, SecondaryWrapper } from './first-section.styled';
import { FirstSectionTypedText } from './ui';
import { CUSTOM_STYLES_SCROLL_DOWN } from './constants';

const TechnologyPlanet = dynamic(() => import('./ui/technology-planet'), {
  loading: () => <Loader />,
  ssr: false,
});

export const FirstSection: FC = () => {
  const t = useTranslations('FirstSection.ScrollDown');

  const sectionText = t('text');

  return (
    <Wrapper data-testid='first-section'>
      <SecondaryWrapper>
        <FirstSectionTypedText />
        <TechnologyPlanet />
      </SecondaryWrapper>
      <ScrollDown customStyles={ CUSTOM_STYLES_SCROLL_DOWN } sectionText={ sectionText } />
    </Wrapper>
  );
};
