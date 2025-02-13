import { FC } from 'react';

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
import { useLogic } from './lib';

export const ThirdSectionCard: FC = () => {
  const { firstDescription, secondDescription, animatedText } = useLogic();

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
