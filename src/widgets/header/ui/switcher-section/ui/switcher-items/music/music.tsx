'use client';

import { FC } from 'react';

import { Wrapper, A } from './music.styled';
import { useLogic } from './lib';

export const Music: FC = () => {
  const { handleChange, tooltip, conditionIcon } = useLogic();

  return (
    <Wrapper data-testid='music' onClick={ handleChange }>
      <A title={ tooltip }>{conditionIcon}</A>
    </Wrapper>
  );
};
