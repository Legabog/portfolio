'use client';

import { Fragment } from 'react';

import { Wrapper } from './switcher-section.styled';
import { NAV_MAP } from './constants';

export const SwitcherSection: React.FC = () => (
  <Wrapper>
    {Object.values(NAV_MAP).map(({ id, element }) => (
      <Fragment key={ id }>{element}</Fragment>
    ))}
  </Wrapper>
);
