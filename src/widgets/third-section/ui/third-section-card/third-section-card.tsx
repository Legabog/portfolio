import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { AlertIcon } from '@shared/ui';
import {
  Wrapper,
  DescriptionWrapper,
  FirstPart,
  SecondPart,
  AnimatedTitle,
  Card,
  CardAnimatedSection,
} from './third-section-card.styled';

export const ThirdSectionCard: FC = () => {
  const t = useTranslations(`ThirdSection.ThirdSectionCard`);

  const firstDescription = t('first-part');
  const secondDescription = t('second-part');
  const animatedText = t('animated-text');

  return (
    <Wrapper data-testid='third-section-card' id='third-section-card'>
      <Card>
        <DescriptionWrapper>
          <FirstPart title={ firstDescription }>{firstDescription}</FirstPart>
          <SecondPart title={ secondDescription }>{secondDescription}</SecondPart>
        </DescriptionWrapper>
        <CardAnimatedSection>
          <AlertIcon />
          <AnimatedTitle title={ animatedText }>{animatedText}</AnimatedTitle>
        </CardAnimatedSection>
      </Card>
    </Wrapper>
  );
};
