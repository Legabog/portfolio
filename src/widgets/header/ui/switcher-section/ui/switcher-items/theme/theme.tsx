'use client';

import { FC } from 'react';

import { MoonIcon, SunIcon } from '@shared/ui';
import { Wrapper, A, IconWrapper } from './theme.styled';
import { useLogic } from './lib';

export const Theme: FC = () => {
  const { handleChange, tooltip, isLightMode } = useLogic();

  return (
    <Wrapper data-testid='theme' onClick={ handleChange }>
      <A title={ tooltip }>
        <IconWrapper $isLightMode={ isLightMode }>
          <SunIcon />
          <MoonIcon />
        </IconWrapper>
      </A>
    </Wrapper>
  );
};
