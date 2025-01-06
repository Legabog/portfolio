'use client';

import { FC } from 'react';

import { useMediaQuery } from '@shared/hooks';
import { IconSection, Rights, Socials } from './ui';
import { Wrapper, MobileWrapper } from './footer.styled';

export const Footer: FC = () => {
  const isBreakpoint = useMediaQuery(600);

  const conditionalPanel = isBreakpoint ? (
    <>
      <MobileWrapper>
        <IconSection />
        <Rights />
      </MobileWrapper>
      <Socials />
    </>
  ) : (
    <>
      <IconSection />
      <Socials />
      <Rights />
    </>
  );

  return (
    <Wrapper data-testid='footer' id='footer'>
      {conditionalPanel}
    </Wrapper>
  );
};
