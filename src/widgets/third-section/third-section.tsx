'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { useObserverDetectSection } from '@shared/hooks';
import { Loader, ScrollDown, SectionTitle } from '@shared/ui';
import { useSecondSectionStore } from '@widgets/second-section/model';
import { CUSTOM_STYLES_SCROLL_DOWN, SECTION_NUMBER_SCROLL_DOWN, TOP_NUMBER } from './constants';
import { Wrapper, SecondaryWrapper } from './third-section.styled';
import { useThirdSectionStore } from './model';

const Brain = dynamic(() => import('./ui/brain'), {
  loading: () => <Loader />,
  ssr: false,
});
const ThirdSectionCard = dynamic(() => import('./ui/third-section-card'), {
  loading: () => <Loader />,
  ssr: false,
});

export const ThirdSection: FC = () => {
  const { setIsIgnore } = useSecondSectionStore();
  const { isVisible, setIsVisible, isIgnore } = useThirdSectionStore();
  const ref = useObserverDetectSection(setIsVisible, isIgnore, [setIsIgnore]);
  const t = useTranslations('ThirdSection.ScrollDown');
  const f = useTranslations(`ThirdSection.ThirdSectionTitle`);

  const sectionText = t('text');
  const title = f('text');

  return (
    <Wrapper ref={ ref } $isVisible={ isVisible } data-testid='third-section' id='third-section'>
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
