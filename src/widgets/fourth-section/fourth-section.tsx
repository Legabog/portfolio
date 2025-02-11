'use client';

import { FC } from 'react';

import { ScrollDown, SectionTitle } from '@shared/ui';
import { Wrapper } from './fourth-section.styled';
import { Projects } from './ui';
import { CUSTOM_STYLES_SCROLL_DOWN, SECTION_NUMBER_SCROLL_DOWN, TOP_NUMBER } from './constants';
import { useLogic } from './lib';

export const FourthSection: FC = () => {
  const { ref, title, sectionText, isVisible } = useLogic();

  return (
    <Wrapper ref={ ref } $isVisible={ isVisible } data-testid='fourth-section' id='fourth-section'>
      <SectionTitle title={ title } topNumber={ TOP_NUMBER } />
      <Projects />
      <ScrollDown
        customStyles={ CUSTOM_STYLES_SCROLL_DOWN }
        sectionNumber={ SECTION_NUMBER_SCROLL_DOWN }
        sectionText={ sectionText }
      />
    </Wrapper>
  );
};
