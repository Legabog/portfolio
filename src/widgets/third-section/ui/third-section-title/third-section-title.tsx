import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useThemeStore } from '@widgets/header';
import {
  Wrapper,
  StyledTypeAnimation,
  DescriptionWrapper,
  FirstPart,
  SecondPart,
  AnimatedTitle,
  TopNumber,
} from './third-section-title.styled';
import { TOP_NUMBER } from './constants';

export const ThirdSectionTitle: FC = () => {
  const t = useTranslations(`ThirdSection.ThirdSectionTitle`);
  const { themeType } = useThemeStore();

  const text = t('text');
  const firstDescription = t('first-part');
  const secondDescription = t('second-part');
  const animatedText = t('animated-text');

  return (
    <Wrapper data-testid='third-section-title' id='third-section-title' title={ text }>
      <TopNumber>{TOP_NUMBER}</TopNumber>
      <StyledTypeAnimation
        key={ themeType }
        repeat={ Infinity }
        sequence={ [text, 1000, '', 1000] }
        speed={ 50 }
      />
      <DescriptionWrapper>
        <FirstPart title={ firstDescription }>{firstDescription}</FirstPart>
        <SecondPart title={ secondDescription }>{secondDescription}</SecondPart>
      </DescriptionWrapper>
      <AnimatedTitle title={ animatedText }>{animatedText}</AnimatedTitle>
    </Wrapper>
  );
};