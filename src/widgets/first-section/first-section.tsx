'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { useMediaQuery } from '@shared/hooks';
import { Loader, ScrollDown } from '@shared/ui';
import { Wrapper, SecondaryWrapper } from './first-section.styled';
import { FirstSectionTypedText } from './ui';

const TechnologyPlanet = dynamic(() => import('./ui/technology-planet'), {
  loading: () => <Loader />,
  ssr: false,
});

export const FirstSection: FC = () => {
  const isBreakpoint = useMediaQuery(900);
  const t = useTranslations('FirstSection.ScrollDown');

  const sectionText = t('text');
  const calculatedMargin = isBreakpoint ? -110 : -80;

  return (
    <Wrapper data-testid='first-section'>
      <SecondaryWrapper id='first-section-secondary'>
        <FirstSectionTypedText />
        <TechnologyPlanet />
      </SecondaryWrapper>
      <ScrollDown customStyles={ `margin-top: ${calculatedMargin}px` } sectionText={ sectionText } />
    </Wrapper>
  );
};
