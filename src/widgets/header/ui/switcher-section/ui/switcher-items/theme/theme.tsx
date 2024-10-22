'use client';

import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

import { MoonIcon, SunIcon } from '@shared/ui';
import { useThemeStore } from './model';
import { Wrapper, A, Tooltip } from './theme.styled';

export const Theme: FC = () => {
  const { themeType, setTheme } = useThemeStore();
  const [mouseIn, setMouseIn] = useState<number>(0);
  const t = useTranslations('Header.theme');
  const isLightMode = themeType === 'light';
  const tooltip = t(`${themeType}`);
  const conditionIcon = isLightMode ? <SunIcon /> : <MoonIcon />;

  const handleChange = () => setTheme();

  return (
    <Wrapper
      data-testid='theme-switcher-item'
      onClick={ handleChange }
      onMouseEnter={ () => setMouseIn(1) }
      onMouseLeave={ () => setMouseIn(2) }
    >
      <A data-testid='theme-switcher-item-tooltip' title={ tooltip } $isActvie>
        {conditionIcon}
        <Tooltip $mouseIn={ mouseIn }>{tooltip}</Tooltip>
      </A>
    </Wrapper>
  );
};
