'use client';

import { FC, memo, useState } from 'react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

import { Loader } from '@shared/ui';
import { SwitcherSection } from '../switcher-section';
import { Backdrop, Button, Span, Wrapper } from './mobile-menu.styled';
import { useMobileMenuStore } from './model';

const Background = dynamic(() => import('@widgets/background'), {
  loading: () => <Loader />,
  ssr: false,
});

export const MobileMenu: FC = memo(() => {
  const [isUsedBefore, setIsUsedBefore] = useState<boolean>(false);
  const { state, toggleState } = useMobileMenuStore();
  const t = useTranslations('MobileMenu');
  const text = t(`tooltip-${state === 1 ? 'active' : 'inactive'}`);

  const onClick = () => {
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
        <Background />
        <SwitcherSection />
      </Backdrop>
    </Wrapper>
  );
});
