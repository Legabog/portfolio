'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';

import { useTranslations } from 'next-intl';
import { Loader, ScrollDown } from '@shared/ui';
import { CUSTOM_STYLES_SCROLL_DOWN, SECTION_NUMBER_SCROLL_DOWN } from './constants';
import { Wrapper, SecondaryWrapper } from './third-section.styled';
import { ThirdSectionTitle } from './ui';

const Brain = dynamic(() => import('./ui/brain'), {
  loading: () => <Loader />,
  ssr: false,
});

export const ThirdSection: FC = () => {
  const t = useTranslations('ThirdSection.ScrollDown');

  const sectionText = t('text');

  return (
    <Wrapper data-testid='third-section' id='third-section'>
      <ThirdSectionTitle />
      <SecondaryWrapper>
        <Brain />
      </SecondaryWrapper>
      <ScrollDown
        customStyles={ CUSTOM_STYLES_SCROLL_DOWN }
        sectionNumber={ SECTION_NUMBER_SCROLL_DOWN }
        sectionText={ sectionText }
      />
    </Wrapper>
  );
};
