'use client';

import { FC } from 'react';

import { SocialItem } from './ui';
import { SOCIALS_ITEMS } from './constants';
import { Wrapper } from './socials.styled';

export const Socials: FC = () => (
  <Wrapper data-testid='socials'>
    {SOCIALS_ITEMS.map((itemProps) => (
      <SocialItem key={ itemProps.id } { ...itemProps } />
    ))}
  </Wrapper>
);
