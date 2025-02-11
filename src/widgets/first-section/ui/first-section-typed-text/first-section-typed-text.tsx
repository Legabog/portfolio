'use client';

import { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { Wrapper, InnerTextWrapper, Title, Description } from './first-section-typed-text.styled';
import { Navigator } from './ui';
import { useLogic } from './lib';

export const FirstSectionTypedText: FC = () => {
  const {
    t,
    animate,
    clear,
    generatedString,
    animateDescription,
    clearDescription,
    generatedStringDescription,
    animateSecond,
    clearSecond,
    generatedStringSecond,
  } = useLogic();

  return (
    <Wrapper data-testid='first-section-typed-text' id='first-section-typed-text'>
      <InnerTextWrapper>
        <Title onMouseEnter={ animate } onMouseLeave={ clear }>
          {generatedString}
        </Title>
        <TypeAnimation
          repeat={ Infinity }
          sequence={ [t('main'), 1000, t('main-2'), 1000] }
          speed={ 50 }
          omitDeletionAnimation
        />
        <Description onMouseEnter={ animateDescription } onMouseLeave={ clearDescription }>
          {generatedStringDescription}
        </Description>
        <Title onMouseEnter={ animateSecond } onMouseLeave={ clearSecond }>
          {generatedStringSecond}
        </Title>
        <Navigator />
      </InnerTextWrapper>
    </Wrapper>
  );
};
