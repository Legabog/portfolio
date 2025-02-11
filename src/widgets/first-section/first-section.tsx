'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';

import { Loader, ScrollDown } from '@shared/ui';
import { Wrapper, SecondaryWrapper } from './first-section.styled';
import { FirstSectionTypedText } from './ui';
import { CUSTOM_STYLES_SCROLL_DOWN, SECTION_NUMBER_SCROLL_DOWN } from './constants';
import { useLogic } from './lib';

const TechnologyPlanet = dynamic(() => import('./ui/technology-planet'), {
  loading: () => <Loader />,
  ssr: false,
});

export const FirstSection: FC = () => {
  const { ref, isVisible, sectionText } = useLogic();

  return (
    <Wrapper ref={ ref } $isVisible={ isVisible } data-testid='first-section' id='first-section'>
      <SecondaryWrapper>
        <FirstSectionTypedText />
        <TechnologyPlanet />
      </SecondaryWrapper>
      <ScrollDown
        customStyles={ CUSTOM_STYLES_SCROLL_DOWN }
        sectionNumber={ SECTION_NUMBER_SCROLL_DOWN }
        sectionText={ sectionText }
      />
    </Wrapper>
  );
};
