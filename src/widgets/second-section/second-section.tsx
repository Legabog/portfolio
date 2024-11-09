'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';

import { useTranslations } from 'next-intl';
import { Loader, ScrollDown } from '@shared/ui';
import { CUSTOM_STYLES_SCROLL_DOWN, SECTION_NUMBER_SCROLL_DOWN } from './constants';
import { Wrapper, SecondaryWrapper } from './second-section.styled';
import { SecondSectionTitle, SecondSectionTypedText } from './ui';

const Human = dynamic(() => import('./ui/human'), {
  loading: () => <Loader />,
  ssr: false,
});

export const SecondSection: FC = () => {
  const t = useTranslations('SecondSection.ScrollDown');

  const sectionText = t('text');

  return (
    <Wrapper data-testid='second-section'>
      <SecondSectionTitle />
      <SecondaryWrapper>
        <Human />
        <SecondSectionTypedText />
      </SecondaryWrapper>
      <ScrollDown
        customStyles={ CUSTOM_STYLES_SCROLL_DOWN }
        sectionNumber={ SECTION_NUMBER_SCROLL_DOWN }
        sectionText={ sectionText }
      />
    </Wrapper>
  );
};
