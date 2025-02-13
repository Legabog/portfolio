'use client';

import { FC } from 'react';

import { InfoSection, MobileMenu, SwitcherSection, IconSection } from './ui';
import { Wrapper, SecondWrapper } from './header.styled';
import { useLogic } from './lib';

export const Header: FC = () => {
  const { isScrolled, isBreakpoint } = useLogic();
  return (
    <Wrapper data-testid='header'>
      <SecondWrapper $isScrolled={ isScrolled }>
        <IconSection />
        {!isBreakpoint && (
          <>
            <SwitcherSection />
            <InfoSection />
          </>
        )}
      </SecondWrapper>
      {isBreakpoint && <MobileMenu />}
    </Wrapper>
  );
};
