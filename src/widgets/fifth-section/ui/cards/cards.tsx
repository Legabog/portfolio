import { FC } from 'react';

import { Wrapper } from './cards.styled';
import { CARDS } from './constants';
import { Card } from './ui';

export const Cards: FC = () => (
  <Wrapper>
    {CARDS.map((props) => (
      <Card key={ props.id } { ...props } />
    ))}
  </Wrapper>
);
