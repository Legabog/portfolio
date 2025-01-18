'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useObserverDetectSection } from '@shared/hooks';
import { ScrollDown, SectionTitle } from '@shared/ui';
import { useSecondSectionStore } from '@widgets/second-section';
import { useThirdSectionStore } from '@widgets/third-section';
import { Wrapper } from './fourth-section.styled';
import { Projects } from './ui';
import { CUSTOM_STYLES_SCROLL_DOWN, SECTION_NUMBER_SCROLL_DOWN, TOP_NUMBER } from './constants';
import { useFourthSectionStore } from './model';

export const FourthSection: FC = () => {
  const { setIsIgnore: setIsIgnoreSecondSection } = useSecondSectionStore();
  const { setIsIgnore: setIsIgnoreThirdSection } = useThirdSectionStore();
  const { isVisible, setIsVisible, isIgnore } = useFourthSectionStore();
  const ref = useObserverDetectSection(
    setIsVisible,
    isIgnore,
    [setIsIgnoreSecondSection, setIsIgnoreThirdSection],
    0.2,
  );

  const t = useTranslations('FourthSection.ScrollDown');
  const f = useTranslations(`FourthSection.FourthSectionTitle`);

  const title = f('text');
  const sectionText = t('text');

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
