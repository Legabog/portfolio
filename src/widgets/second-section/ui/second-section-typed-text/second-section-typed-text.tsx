'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { TypeAnimation } from 'react-type-animation';

import { Wrapper, InnerTextWrapper, Description } from './second-section-typed-text.styled';

export const SecondSectionTypedText: FC = () => {
  const t = useTranslations(`SecondSection.SecondSectionTypedText`);

  return (
    <Wrapper data-testid='second-section-typed-text'>
      <InnerTextWrapper>
        <TypeAnimation
          repeat={ Infinity }
          sequence={ [t('hello'), 1000, t('hello').split(' ')[0], 1000] }
          speed={ 50 }
        />
        <TypeAnimation
          repeat={ Infinity }
          sequence={ [
            t('name'),
            1000,
            t('specialization'),
            1000,
            t('extra-info'),
            1000,
            t('crypto'),
            1000,
            t('egg'),
            1000,
          ] }
          speed={ 50 }
          omitDeletionAnimation
        />
        <Description>{t('description')}</Description>
      </InnerTextWrapper>
    </Wrapper>
  );
};
