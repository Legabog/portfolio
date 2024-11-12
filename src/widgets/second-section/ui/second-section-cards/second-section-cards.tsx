'use client';

import { cloneElement, FC } from 'react';

import { Wrapper } from './second-section-cards.styled';
import { useAdditionalLogic } from './lib';

export const SecondSectionCards: FC = () => {
  const { cards } = useAdditionalLogic();

  return (
    <Wrapper data-testid='second-section-cards'>
      {cards.map(({ JSX, id }) => cloneElement(JSX(), { key: id }))}
    </Wrapper>
  );
};
