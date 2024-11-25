import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useThemeStore } from '@widgets/header';
import { Wrapper, StyledTypeAnimation, TopNumber } from './fourth-section-title.styled';
import { TOP_NUMBER } from './constants';

export const FourthSectionTitle: FC = () => {
  const t = useTranslations(`FourthSection.FourthSectionTitle`);
  const { themeType } = useThemeStore();

  const text = t('text');

  return (
    <Wrapper data-testid='third-section-title' id='third-section-title' title={ text }>
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
