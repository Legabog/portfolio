import { TypeAnimation } from 'react-type-animation';
import { useTranslations } from 'next-intl';

import { useState } from 'react';
import { NitroIcon, ScienceIcon, SmileIcon } from '@shared/ui';
import { useSoundEffectsStore } from '@widgets/header';
import {
  CardWrapper,
  FrontWrapper,
  BackWrapper,
  Description,
  Title,
  TopSection,
  Number,
} from './second-section-cards.styled';
import { JSXElement } from './types';

export const useAdditionalLogic = () => {
  const t = useTranslations(`SecondSection.SecondSectionTypedText`);
  const { play } = useSoundEffectsStore();

  const cards: JSXElement[] = [
    {
      id: 'card-1',
      JSX: () => {
        const [flip, setFlip] = useState<boolean>(false);

        const onClick = () => {
          play('wooshing-1.wav');
          setFlip((prev) => !prev);
        };
        return (
          <CardWrapper $flip={ flip } onClick={ onClick }>
            <FrontWrapper $flip={ flip }>
              <TopSection>
                <SmileIcon />
                <Number>/ 01</Number>
              </TopSection>
              <Title>Positive</Title>
              <Description>
                I'm really positive person, who cares about team spirit. Not trying to hurt my
                teammate, even if he's wrong.
              </Description>
            </FrontWrapper>
            <BackWrapper $flip={ flip }>
              <TypeAnimation
                repeat={ Infinity }
                sequence={ [t('hello'), 1000, t('hello').split(' ')[0], 1000] }
                speed={ 50 }
              />
              <Description>{t('description-1')}</Description>
            </BackWrapper>
          </CardWrapper>
        );
      },
    },
    {
      id: 'card-2',
      JSX: () => {
        const [flip, setFlip] = useState<boolean>(false);

        const onClick = () => {
          play('wooshing-1.wav');
          setFlip((prev) => !prev);
        };

        return (
          <CardWrapper $flip={ flip } onClick={ onClick }>
            <FrontWrapper $flip={ flip }>
              <TopSection>
                <NitroIcon />
                <Number>/ 02</Number>
              </TopSection>
              <Title>Performer</Title>
              <Description>
                I'm trying to do a better job. I am always interested in improving my product.
              </Description>
            </FrontWrapper>
            <BackWrapper $flip={ flip }>
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
            </BackWrapper>
          </CardWrapper>
        );
      },
    },
    {
      id: 'card-3',
      JSX: () => {
        const [flip, setFlip] = useState<boolean>(false);

        const onClick = () => {
          play('wooshing-1.wav');
          setFlip((prev) => !prev);
        };

        return (
          <CardWrapper $flip={ flip } onClick={ onClick }>
            <FrontWrapper $flip={ flip }>
              <TopSection>
                <ScienceIcon />
                <Number>/ 03</Number>
              </TopSection>
              <Title>Self-improvement</Title>
              <Description>
                Always trying to learn something new in the world of Frontend technologies, and not
                only.
              </Description>
            </FrontWrapper>
            <BackWrapper $flip={ flip }>
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
            </BackWrapper>
          </CardWrapper>
        );
      },
    },
  ];
  return { cards };
};
