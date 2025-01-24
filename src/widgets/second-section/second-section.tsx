'use client';

import { FC, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { useMediaQuery, useObserverDetectSection } from '@shared/hooks';
import { Loader, ScrollDown, SectionTitle } from '@shared/ui';
import { NavigateButton } from '@widgets/navigate-button';
import { NavigationPanel } from '@widgets/navigation-panel';
import { CUSTOM_STYLES_SCROLL_DOWN, SECTION_NUMBER_SCROLL_DOWN, TOP_NUMBER } from './constants';
import { Wrapper, SecondaryWrapper } from './second-section.styled';
import { SecondSectionCards } from './ui';
import { useSecondSectionStore } from './model';

const Human = dynamic(() => import('./ui/human'), {
  loading: () => <Loader />,
  ssr: false,
});

export const SecondSection: FC = () => {
  const { isVisible, setIsVisible, isIgnore } = useSecondSectionStore();
  const ref = useObserverDetectSection(setIsVisible, isIgnore);
  const isBreakpoint = useMediaQuery(900);
  const t = useTranslations('SecondSection.ScrollDown');
  const f = useTranslations(`SecondSection.SecondSectionTitle`);

  const [isFullHeight, setIsFullHeight] = useState<boolean>(false);

  const sectionText = t('text');
  const title = f('text');
  const titleWithoutLastWord = title.split(' ')[0];

  useEffect(() => {
    setIsFullHeight(
      (document.getElementById('second-section')?.scrollHeight as number) <= window.innerHeight,
    );
  }, []);

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
      {!isBreakpoint && <NavigationPanel />}
      <NavigateButton />
      <ScrollDown
        customStyles={ CUSTOM_STYLES_SCROLL_DOWN }
        sectionNumber={ SECTION_NUMBER_SCROLL_DOWN }
        sectionText={ sectionText }
      />
    </Wrapper>
  );
};
