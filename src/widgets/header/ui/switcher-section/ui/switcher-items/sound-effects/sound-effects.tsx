'use client';

import { FC } from 'react';

import { Wrapper, A } from './sound-effects.styled';
import { useLogic } from './lib';

export const SoundEffects: FC = () => {
  const { handleChange, tooltip, conditionIcon } = useLogic();

  return (
    <Wrapper data-testid='sound-effects' onClick={ handleChange }>
      <A title={ tooltip }>{conditionIcon}</A>
    </Wrapper>
  );
};
