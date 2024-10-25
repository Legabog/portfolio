'use client';

import { FC, useState } from 'react';

import { useResizeObserver } from '@shared/hooks';
import { IconSection, InfoSection, MobileMenu, SwitcherSection } from './ui';
import { Wrapper } from './header.styled';

export const Header: FC = () => {
  const [width, setWidth] = useState<number>(
    (typeof window !== 'undefined' && window.innerWidth) as number,
  );

  const conditionalPanel =
    width > 800 ? (
      <>
        <SwitcherSection />
        <InfoSection />
      </>
    ) : (
      <MobileMenu />
    );
  const resizeHandler = () => setWidth(window.innerWidth);
  const resizeRef = useResizeObserver(resizeHandler);

  return (
    <Wrapper ref={ resizeRef } data-testid='header'>
      <IconSection />
      {conditionalPanel}
    </Wrapper>
  );
};
