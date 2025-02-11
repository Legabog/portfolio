'use client';

import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

import { Loader } from '@shared/ui';
import { useSoundEffectsStore } from '@widgets/header';
import { IconSection } from '../icon-section';
import { SwitcherSection } from '../switcher-section';
import { InfoSection } from '../info-section';
import { Backdrop, Button, Span, Wrapper, BackdropWrapper } from './mobile-menu.styled';
import { Footer } from './ui';
import { useMobileMenuStore } from './model';

const Background = dynamic(() => import('@widgets/background'), {
  loading: () => <Loader />,
  ssr: false,
});

export const MobileMenu: FC = () => {
  const t = useTranslations('Header.MobileMenu');
  const { state, toggleState } = useMobileMenuStore();
  const { play } = useSoundEffectsStore();

  const [isUsedBefore, setIsUsedBefore] = useState<boolean>(false);

  const isActive = state === 1;
  const text = t(`tooltip-${isActive ? 'active' : 'inactive'}`);

  const onClick = () => {
    play(`${isActive ? 'wooshing' : 'click'}-1.wav`);
    toggleState();
    setIsUsedBefore(true);
  };

  return (
    <Wrapper key={ state } data-testid='mobile-menu'>
      <Button title={ text } onClick={ onClick }>
        <Span $spanType='first' $state={ state } />
        <Span $spanType='second' $state={ state } />
      </Button>
      <Backdrop $isUsedBefore={ isUsedBefore } $state={ state }>
        <BackdropWrapper $isUsedBefore={ isUsedBefore } $state={ state }>
          <Background />
          <IconSection isMobile />
          <SwitcherSection />
          <InfoSection />
          <Footer />
        </BackdropWrapper>
      </Backdrop>
    </Wrapper>
  );
};
