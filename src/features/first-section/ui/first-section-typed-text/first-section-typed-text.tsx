
'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { TypeAnimation } from 'react-type-animation';

import { Wrapper, InnerTextWrapper, Title, Description } from './first-section-typed-text.styled';

export const FirstSectionTypedText: FC = () => {
  const t = useTranslations(`FirstSectionTypedText`);

  return (
    <Wrapper data-testid='first-section-typed-text'>
      <InnerTextWrapper>
        <Title>{t('first')}</Title>
        <TypeAnimation
          repeat={ Infinity }
          sequence={ [
            t('main'),
            1000,
            t('main-2'),
            1000
          ] }
          speed={ 50 }
          omitDeletionAnimation
        />
        <Description>{t('description')}</Description>
        <Title>{t('second')}</Title>
      </InnerTextWrapper>
    </Wrapper>
  );
};
