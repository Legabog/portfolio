'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { ChevronDownIcon } from '@shared/ui';
import { Wrapper, Text } from './scroll-down.styled';

export const ScrollDown: FC = () => {
  const t = useTranslations('ScrollDown');
  const text = t('text');

  return (
    <Wrapper data-testid='scroll-down' title={ text }>
      <Text>{text}</Text>
      <ChevronDownIcon />
    </Wrapper>
  );
};
