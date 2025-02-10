'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { MoonIcon, SunIcon } from '@shared/ui';
import { useSoundEffectsStore } from '@widgets/header';
import { useThemeStore } from './model';
import { Wrapper, A, IconWrapper } from './theme.styled';

export const Theme: FC = () => {
  const { play } = useSoundEffectsStore();
  const { themeType, setTheme } = useThemeStore();

  const t = useTranslations('Header.theme');
  const isLightMode = themeType === 'light';
  const tooltip = t(themeType);

  const handleChange = () => {
    play(`switch-${isLightMode ? 'off' : 'on'}.mp3`);
    setTheme();
  };

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
