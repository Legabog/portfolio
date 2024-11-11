'use client';

import { FC } from 'react';

import { Wrapper } from './second-section-cards.styled';
import { SecondSectionCard } from './ui';
import { useAdditionalLogic } from './lib';

export const SecondSectionCards: FC = () => {
  const { cards } = useAdditionalLogic();

  return (
    <Wrapper data-testid='second-section-cards'>
      {cards.map((card) => (
        <SecondSectionCard key={ card.id } JSXElement={ card } />
      ))}
    </Wrapper>
  );
};
