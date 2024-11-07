'use-client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation } from '@shared/hooks';
import { Title } from './types';
import { Wrapper, Text } from './navigator-title.styled';

export const NavigatorTitle: FC<Title> = ({ id }) => {
  const t = useTranslations('FirstSection.FirstSectionTypedText.Navigator');
  const isFirstTitle = id === '1';
  const text = `${isFirstTitle ? '///' : ''}  ${t(`title-${id}`)}`;

  const { animate: animateHandler, clear, generatedString } = useHoverRandomLettersAnimation(text);

  const animate = isFirstTitle ? animateHandler : undefined;

  return (
    <Wrapper
      data-testid={ `navigator-title-${id}` }
      title={ text }
      onMouseEnter={ animate }
      onMouseLeave={ clear }
    >
      <Text $isFirstTitle={ isFirstTitle }>{generatedString}</Text>
    </Wrapper>
  );
};
