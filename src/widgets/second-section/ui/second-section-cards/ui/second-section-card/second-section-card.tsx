import { FC } from 'react';

import { Props } from './types';
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
import { useLogic } from './lib';

export const SecondSectionCard: FC<Props> = ({ id, Icon }) => {
  const {
    flip,
    onClick,
    orderText,
    frontTitle,
    frontDescription,
    backTitle,
    themeType,
    firstTyped,
    secondTyped,
    thirdTyped,
    backDescription,
  } = useLogic(id);

  return (
    <CardWrapper $flip={ flip } data-testid={ `second-section-card-${id}` } onClick={ onClick }>
      <FrontWrapper>
        <TopSection>
          <Icon />
          <TopSectionText $type='number'>{orderText}</TopSectionText>
        </TopSection>
        <Title>{frontTitle}</Title>
        <Description>{frontDescription}</Description>
      </FrontWrapper>
      <BackWrapper>
        <TopSection>
          <TopSectionText $type='text'>{backTitle}</TopSectionText>
          <TopSectionText $type='number'>{orderText}</TopSectionText>
        </TopSection>
        <StyledTypeAnimation
          key={ themeType }
          repeat={ Infinity }
          sequence={ [firstTyped, 1000, secondTyped, 1000, thirdTyped, 1000] }
          speed={ 30 }
        />
        <Description>{backDescription}</Description>
      </BackWrapper>
    </CardWrapper>
  );
};
