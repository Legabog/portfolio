'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { ChevronDownIcon } from '@shared/ui';
import { Wrapper, WrapperScroll, WrapperText, Text } from './scroll-down.styled';
import { Props } from './types';

export const ScrollDown: FC<Props> = ({
  sectionText = 'Section',
  sectionNumber = '01',
  totalSections = '04',
  customStyles,
}) => {
  const t = useTranslations('ScrollDown');
  const text = t('text');

  return (
    <Wrapper $customStyles={ customStyles } data-testid='scroll-down'>
      <WrapperScroll>
        <Text title={ text }>{text}</Text>
        <ChevronDownIcon />
      </WrapperScroll>
      <WrapperText>
        <Text>
          [ {sectionNumber} / {totalSections} ]
        </Text>
        <Text title={ sectionText }>{sectionText}</Text>
      </WrapperText>
    </Wrapper>
  );
};
