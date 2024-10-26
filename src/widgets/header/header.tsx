'use client';

import { FC } from 'react';

import { useMediaQuery } from '@shared/hooks';
import { IconSection, InfoSection, MobileMenu, SwitcherSection } from './ui';
import { Wrapper } from './header.styled';

export const Header: FC = () => {
  const isBreakpoint = useMediaQuery(800);

  const conditionalPanel = isBreakpoint ? (
    <MobileMenu />
  ) : (
    <>
      <SwitcherSection />
      <InfoSection />
    </>
  );

  return (
    <Wrapper data-testid='header'>
      <IconSection />
      {conditionalPanel}
    </Wrapper>
  );
};
