import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { TypeAnimation } from 'react-type-animation';

import { Wrapper, TopNumber } from './second-section-title.styled';
import { TOP_NUMBER } from './constants';

export const SecondSectionTitle: FC = () => {
  const t = useTranslations(`SecondSection.SecondSectionTitle`);

  const text = t('text');
  const textWithoutLastWord = text.split(' ')[0];

  return (
    <Wrapper data-testid='second-section-title' title={ text }>
      <TopNumber>{TOP_NUMBER}</TopNumber>
      <TypeAnimation
        repeat={ Infinity }
        sequence={ [text, 1000, textWithoutLastWord, 1000] }
        speed={ 50 }
        omitDeletionAnimation
      />
    </Wrapper>
  );
};
