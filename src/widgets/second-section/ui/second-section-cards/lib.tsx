import { TypeAnimation } from 'react-type-animation';
import { useTranslations } from 'next-intl';

import { CardWrapper, Description } from './second-section-cards.styled';
import { JSXElement } from './types';

export const useAdditionalLogic = () => {
  const t = useTranslations(`SecondSection.SecondSectionTypedText`);

  const cards: JSXElement[] = [
    {
      id: 'card-1',
      JSX: (
        <CardWrapper>
          <TypeAnimation
            repeat={ Infinity }
            sequence={ [t('hello'), 1000, t('hello').split(' ')[0], 1000] }
            speed={ 50 }
          />
          <Description>{t('description-1')}</Description>
        </CardWrapper>
      ),
    },
    {
      id: 'card-2',
      JSX: (
        <CardWrapper>
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
          <Description>{t('description-2')}</Description>
        </CardWrapper>
      ),
    },
    {
      id: 'card-3',
      JSX: (
        <CardWrapper>
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
          <Description>{t('description-2')}</Description>
        </CardWrapper>
      ),
    },
  ];
  return { cards };
};
