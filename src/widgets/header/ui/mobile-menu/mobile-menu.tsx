'use client';

import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

import { Loader } from '@shared/ui';
import { Backdrop, Button, Span, Wrapper } from './mobile-menu.styled';

const Background = dynamic(() => import('@widgets/background'), {
  loading: () => <Loader />,
  ssr: false,
});

export const MobileMenu: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const t = useTranslations('MobileMenu');
  const text = t(`tooltip-${isActive ? 'active' : 'inactive'}`);

  return (
    <Wrapper>
      <Button title={ text } onClick={ () => setIsActive((prev) => !prev) }>
        <Span $isActive={ isActive } $spanType='first' />
        <Span $isActive={ isActive } $spanType='second' />
      </Button>
      <Backdrop $isActive={ isActive }>
        <Background />
        <h1 style={ { color: 'white' } }>ASDASDASDASDASD</h1>
      </Backdrop>
    </Wrapper>
  );
};
