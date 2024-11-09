import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { TypeAnimation } from 'react-type-animation';

import { Wrapper } from './second-section-title.styled';

export const SecondSectionTitle: FC = () => {
  const t = useTranslations(`SecondSection.SecondSectionTitle`);

  const text = t('text');
  const textWithoutLastWord = text.split(' ')[0];

  return (
    <Wrapper data-testid='second-section-title' title={ text }>
      <TypeAnimation
        repeat={ Infinity }
        sequence={ [text, 1000, textWithoutLastWord, 1000] }
        speed={ 50 }
        omitDeletionAnimation
      />
    </Wrapper>
  );
};
