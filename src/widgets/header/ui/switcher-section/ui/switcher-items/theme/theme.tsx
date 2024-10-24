'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { MoonIcon, SunIcon } from '@shared/ui';
import { useThemeStore } from './model';
import { Wrapper, A } from './theme.styled';

export const Theme: FC = () => {
  const { themeType, setTheme } = useThemeStore();

  const t = useTranslations('Header.theme');
  const isLightMode = themeType === 'light';
  const tooltip = t(`${themeType}`);
  const conditionIcon = isLightMode ? <SunIcon /> : <MoonIcon />;

  const handleChange = () => setTheme();

  return (
    <Wrapper data-testid='theme-switcher-item' onClick={ handleChange }>
      <A data-testid='theme-switcher-item-tooltip' title={ tooltip } $isActvie>
        {conditionIcon}
      </A>
    </Wrapper>
  );
};
