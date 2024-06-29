'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { TypeAnimation } from 'react-type-animation';

import { Wrapper, InnerTextWrapper, Description } from './typed-text.styled';

export const TypedText: FC = () => {
  const t = useTranslations(`TypedText`);

  return (
    <Wrapper data-testid='typed-text'>
      <InnerTextWrapper>
        <TypeAnimation sequence={ [t('hello')] } speed={ 50 } />
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
