'use client';

import { FC, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import { useTranslations } from 'next-intl';
import { Loader, ScrollDown } from '@shared/ui';
import { CUSTOM_STYLES_SCROLL_DOWN, SECTION_NUMBER_SCROLL_DOWN } from './constants';
import { Wrapper, SecondaryWrapper } from './second-section.styled';
import { SecondSectionTitle, SecondSectionCards } from './ui';

const Human = dynamic(() => import('./ui/human'), {
  loading: () => <Loader />,
  ssr: false,
});

export const SecondSection: FC = () => {
  const t = useTranslations('SecondSection.ScrollDown');
  const [isFullHeight, setIsFullHeight] = useState<boolean>(false);

  const sectionText = t('text');

  useEffect(() => {
    setIsFullHeight(
      (document.getElementById('second-section')?.scrollHeight as number) <= window.innerHeight,
    );
  }, []);

  return (
    <Wrapper $isFullHeight={ isFullHeight } data-testid='second-section' id='second-section'>
      <SecondSectionTitle />
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
