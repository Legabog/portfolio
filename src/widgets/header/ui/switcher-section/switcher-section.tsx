'use client';

import { FC } from 'react';

import { Wrapper, Nav } from './switcher-section.styled';
import { NAV_MAP } from './constants';

export const SwitcherSection: FC = () => (
  <Wrapper>
    {Object.values(NAV_MAP).map(({ id, element }) => (
      <Nav key={ id }>{element}</Nav>
    ))}
  </Wrapper>
);
