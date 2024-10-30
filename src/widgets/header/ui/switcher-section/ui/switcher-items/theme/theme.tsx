'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { MoonIcon, SunIcon } from '@shared/ui';
import { useSoundEffectsStore } from '@widgets/header';
import { useThemeStore } from './model';
import { Wrapper, A } from './theme.styled';

export const Theme: FC = () => {
  const { play } = useSoundEffectsStore();
  const { themeType, setTheme } = useThemeStore();

  const t = useTranslations('Header.theme');
  const isLightMode = themeType === 'light';
  const tooltip = t(`${themeType}`);
  const conditionIcon = isLightMode ? <SunIcon /> : <MoonIcon />;

  const handleChange = () => {
    play(`switch-${isLightMode ? 'off' : 'on'}.mp3`);
    setTheme();
  };

  return (
    <Wrapper data-testid='theme-switcher-item' onClick={ handleChange }>
      <A data-testid='theme-switcher-item-tooltip' title={ tooltip }>
        {conditionIcon}
      </A>
    </Wrapper>
  );
};
