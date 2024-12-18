import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useThemeStore } from '@widgets/header';
import { Wrapper, StyledTypeAnimation, TopNumber } from './fifth-section-title.styled';
import { TOP_NUMBER } from './constants';

export const FifthSectionTitle: FC = () => {
  const t = useTranslations(`FifthSection.FifthSectionTitle`);
  const { themeType } = useThemeStore();

  const text = t('text');

  return (
    <Wrapper data-testid='fifth-section-title' id='fifth-section-title' title={ text }>
      <TopNumber>{TOP_NUMBER}</TopNumber>
      <StyledTypeAnimation
        key={ themeType }
        repeat={ Infinity }
        sequence={ [text, 1000, '', 1000] }
        speed={ 50 }
      />
    </Wrapper>
  );
};
