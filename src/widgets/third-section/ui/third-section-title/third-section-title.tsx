import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { TypeAnimation } from 'react-type-animation';

import { Wrapper } from './third-section-title.styled';

export const ThirdSectionTitle: FC = () => {
  const t = useTranslations(`ThirdSection.ThirdSectionTitle`);

  const text = t('text');

  return (
    <Wrapper data-testid='third-section-title' title={ text }>
      <TypeAnimation repeat={ Infinity } sequence={ [text, 1000, '', 1000] } speed={ 50 } />
    </Wrapper>
  );
};
