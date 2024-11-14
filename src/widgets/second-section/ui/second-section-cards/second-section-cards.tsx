'use client';

import { FC } from 'react';

import { Wrapper } from './second-section-cards.styled';
import { CARDS } from './constants';
import { SecondSectionCard } from './ui';

export const SecondSectionCards: FC = () => (
  <Wrapper data-testid='second-section-cards'>
    {CARDS.map((props) => (
      <SecondSectionCard key={ props.id } { ...props } />
    ))}
  </Wrapper>
);
