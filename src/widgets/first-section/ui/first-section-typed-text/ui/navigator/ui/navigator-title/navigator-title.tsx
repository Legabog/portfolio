'use-client';

import { FC } from 'react';

import { Title } from './types';
import { Wrapper, Text } from './navigator-title.styled';
import { useLogic } from './lib';

export const NavigatorTitle: FC<Title> = (props) => {
  const { animate, clear, text, isFirstTitle, generatedString, id } = useLogic(props);

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
