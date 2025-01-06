'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { ScrollDown } from '@shared/ui';
import { Wrapper } from './fourth-section.styled';
import { FourthSectionTitle, Projects } from './ui';
import { CUSTOM_STYLES_SCROLL_DOWN, SECTION_NUMBER_SCROLL_DOWN } from './constants';

export const FourthSection: FC = () => {
  const t = useTranslations('FourthSection.ScrollDown');

  const sectionText = t('text');

  return (
    <Wrapper data-testid='fourth-section' id='fourth-section'>
      <FourthSectionTitle />
      <Projects />
      <ScrollDown
        customStyles={ CUSTOM_STYLES_SCROLL_DOWN }
        sectionNumber={ SECTION_NUMBER_SCROLL_DOWN }
        sectionText={ sectionText }
      />
    </Wrapper>
  );
};
