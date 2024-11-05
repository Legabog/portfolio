'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { TypeAnimation } from 'react-type-animation';

import { useHoverRandomLettersAnimation } from '@shared/hooks';
import { Wrapper, InnerTextWrapper, Title, Description } from './first-section-typed-text.styled';

export const FirstSectionTypedText: FC = () => {
  const t = useTranslations(`FirstSectionTypedText`);
  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(t('first'));
  const {
    animate: animateDescription,
    clear: clearDescription,
    generatedString: generatedStringDescription,
  } = useHoverRandomLettersAnimation(t('description'));
  const {
    animate: animateSecond,
    clear: clearSecond,
    generatedString: generatedStringSecond,
  } = useHoverRandomLettersAnimation(t('second'));

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
      </InnerTextWrapper>
    </Wrapper>
  );
};
