'use client';

import { FC } from 'react';
import { Wrapper, Main } from './loader.styled';

export const Loader: FC = () => (
  <Wrapper data-testid='loader'>
    <Main />
  </Wrapper>
);
