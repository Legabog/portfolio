'use client';

import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

import { useSoundEffectsStore } from '@widgets/header';
import { SwitcherSection } from '../switcher-section';
import { InfoSection } from '../info-section';
import { Backdrop, Button, Span, Wrapper } from './mobile-menu.styled';
import { useMobileMenuStore } from './model';
import { Footer } from './ui';

export const MobileMenu: FC = () => {
  const [isUsedBefore, setIsUsedBefore] = useState<boolean>(false);
  const { state, toggleState } = useMobileMenuStore();
  const t = useTranslations('MobileMenu');
  const isActive = state === 1;
  const text = t(`tooltip-${isActive ? 'active' : 'inactive'}`);
  const { play } = useSoundEffectsStore();

  const onClick = () => {
    play(`${isActive ? 'wooshing' : 'click'}-1.wav`);
    toggleState();
    setIsUsedBefore(true);
  };

  return (
    <Wrapper key={ state }>
      <Button title={ text } onClick={ onClick }>
        <Span $spanType='first' $state={ state } />
        <Span $spanType='second' $state={ state } />
      </Button>
      <Backdrop $isUsedBefore={ isUsedBefore } $state={ state }>
        <SwitcherSection />
        <InfoSection />
        <Footer />
      </Backdrop>
    </Wrapper>
  );
};
