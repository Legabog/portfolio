'use-client';

import { FC } from 'react';

import { Title } from './types';
import { Wrapper, Text } from './navigator-title.styled';
import { useLogic } from './lib';

export const NavigatorTitle: FC<Title> = (props) => {
  const { text, isFirstTitle, id } = useLogic(props);

  return (
    <Wrapper data-testid={ `navigator-title-${id}` } title={ text }>
      <Text $isFirstTitle={ isFirstTitle }>{text}</Text>
    </Wrapper>
  );
};
