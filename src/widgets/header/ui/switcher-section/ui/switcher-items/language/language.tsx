'use client';

import { FC } from 'react';

import { Wrapper } from './language.styled';
import { SWITCHER_ITEMS } from './constants';
import { Item } from './ui';

export const Language: FC = () => (
  <Wrapper>
    {SWITCHER_ITEMS.map((props) => (
      <Item key={ props.id } { ...props } />
    ))}
  </Wrapper>
);
