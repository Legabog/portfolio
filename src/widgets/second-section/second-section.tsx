'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';

import { Loader, ScrollDown, SectionTitle } from '@shared/ui';
import { CUSTOM_STYLES_SCROLL_DOWN, SECTION_NUMBER_SCROLL_DOWN, TOP_NUMBER } from './constants';
import { Wrapper, SecondaryWrapper } from './second-section.styled';
import { SecondSectionCards } from './ui';
import { useLogic } from './lib';

const Human = dynamic(() => import('./ui/human'), {
  loading: () => <Loader />,
  ssr: false,
});

export const SecondSection: FC = () => {
  const { ref, isFullHeight, isVisible, titleWithoutLastWord, title, sectionText } = useLogic();

  return (
    <Wrapper
      ref={ ref }
      $isFullHeight={ isFullHeight }
      $isVisible={ isVisible }
      data-testid='second-section'
      id='second-section'
    >
      <SectionTitle
        animatedSlicedTitle={ titleWithoutLastWord }
        title={ title }
        topNumber={ TOP_NUMBER }
      />
      <SecondaryWrapper>
        <Human />
        <SecondSectionCards />
      </SecondaryWrapper>
      <ScrollDown
        customStyles={ CUSTOM_STYLES_SCROLL_DOWN }
        sectionNumber={ SECTION_NUMBER_SCROLL_DOWN }
        sectionText={ sectionText }
      />
    </Wrapper>
  );
};
