'use client';

import { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { Wrapper, InnerTextWrapper, Title, Description } from './first-section-typed-text.styled';
import { Navigator } from './ui';
import { useLogic } from './lib';

export const FirstSectionTypedText: FC = () => {
  const { title, description, secondTitle, animatedFirstPart, animatedSecondPart, isRuLanguage } =
    useLogic();

  return (
    <Wrapper data-testid='first-section-typed-text' id='first-section-typed-text'>
      <InnerTextWrapper>
        <Title title={ title }>{title}</Title>
        <TypeAnimation
          repeat={ Infinity }
          sequence={ [animatedFirstPart, 1000, animatedSecondPart, 1000] }
          speed={ 30 }
        />
        <Description title={ description }>{description}</Description>
        <Title $isRuLanguage={ isRuLanguage } title={ secondTitle } $isSecondTitle>
          {secondTitle}
        </Title>
        <Navigator />
      </InnerTextWrapper>
    </Wrapper>
  );
};
