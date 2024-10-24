'use client';

import React from 'react';

import { Wrapper } from './switcher-section.styled';
import { NAV_MAP } from './constants';

export const SwitcherSection: React.FC = () => (
  <Wrapper>
    {Object.values(NAV_MAP).map(({ id, element }) => (
      <React.Fragment key={ id }> {element}</React.Fragment>
    ))}
  </Wrapper>
);
