'use client';

import { FC } from 'react';

import { IconSection } from './ui';
import { Wrapper } from './header.styled';
import { useLogic } from './lib';

export const Header: FC = () => {
  const { conditionalPanel } = useLogic();

  return (
    <Wrapper data-testid='header'>
      <IconSection />
      {conditionalPanel}
    </Wrapper>
  );
};
