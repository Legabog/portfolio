'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { Loader, ScrollDown, SectionTitle } from '@shared/ui';
import { CUSTOM_STYLES_SCROLL_DOWN, SECTION_NUMBER_SCROLL_DOWN, TOP_NUMBER } from './constants';
import { Wrapper, SecondaryWrapper } from './third-section.styled';

const Brain = dynamic(() => import('./ui/brain'), {
  loading: () => <Loader />,
  ssr: false,
});
const ThirdSectionCard = dynamic(() => import('./ui/third-section-card'), {
  loading: () => <Loader />,
  ssr: false,
});

export const ThirdSection: FC = () => {
  const t = useTranslations('ThirdSection.ScrollDown');
  const f = useTranslations(`ThirdSection.ThirdSectionTitle`);

  const sectionText = t('text');
  const title = f('text');

  return (
    <Wrapper data-testid='third-section' id='third-section'>
      <SectionTitle title={ title } topNumber={ TOP_NUMBER } />
      <ThirdSectionCard />
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
