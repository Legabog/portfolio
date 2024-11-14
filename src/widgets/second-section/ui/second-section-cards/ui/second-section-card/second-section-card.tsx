import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

import { useSoundEffectsStore, useThemeStore } from '@widgets/header';
import { CardProps } from '../../types';
import {
  CardWrapper,
  FrontWrapper,
  BackWrapper,
  TopSection,
  TopSectionText,
  Title,
  Description,
  StyledTypeAnimation,
} from './second-section-card.styled';

export const SecondSectionCard: FC<CardProps> = ({ id, Icon }) => {
  const t = useTranslations(`SecondSection.SecondSectionCards.card-${id}`);
  const { play } = useSoundEffectsStore();
  const { themeType } = useThemeStore();

  const [flip, setFlip] = useState<boolean>(false);

  const orderText = `/ 0${id}`;
  const frontTitle = t('front.title');
  const frontDescription = t('front.description');
  const backTitle = t('back.title');
  const backDescription = t('back.description');
  const firstTyped = t('back.typed-1');
  const secondTyped = t('back.typed-2');
  const thirdTyped = t('back.typed-3');

  const onClick = () => {
    play('wooshing-1.wav');
    setFlip((prev) => !prev);
  };
  return (
    <CardWrapper $flip={ flip } data-testid={ `second-section-card-${id}` } onClick={ onClick }>
      <FrontWrapper $flip={ flip }>
        <TopSection>
          <Icon />
          <TopSectionText $type='number'>{orderText}</TopSectionText>
        </TopSection>
        <Title>{frontTitle}</Title>
        <Description>{frontDescription}</Description>
      </FrontWrapper>
      <BackWrapper $flip={ flip }>
        <TopSection>
          <TopSectionText $type='text'>{backTitle}</TopSectionText>
          <TopSectionText $type='number'>{orderText}</TopSectionText>
        </TopSection>
        <StyledTypeAnimation
          key={ themeType }
          repeat={ Infinity }
          sequence={ [firstTyped, 1000, secondTyped, 1000, thirdTyped, 1000] }
          speed={ 50 }
        />
        <Description>{backDescription}</Description>
      </BackWrapper>
    </CardWrapper>
  );
};
