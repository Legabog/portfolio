import { FC } from 'react';

import { Wrapper } from './technical-cards.styled';
import { TECHNICAL_CARDS } from './constants';
import { TechnicalCard } from './ui';

export const TechnicalCards: FC = () => (
  <Wrapper data-testid='technical-cards'>
    {TECHNICAL_CARDS.map((props) => (
      <TechnicalCard key={ props.id } { ...props } />
    ))}
  </Wrapper>
);
