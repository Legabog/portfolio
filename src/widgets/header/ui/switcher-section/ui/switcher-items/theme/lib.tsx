import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import { THEME } from '@shared/constants';
import { useSoundEffectsStore } from '@widgets/header';
import { useThemeStore } from './model';

export const useLogic = () => {
  const { play } = useSoundEffectsStore();
  const { themeType, setTheme } = useThemeStore();

  const t = useTranslations('Header.theme');
  const isLightMode = themeType === 'light';
  const tooltip = t(themeType);

  const handleChange = () => {
    play(`switch-${isLightMode ? 'off' : 'on'}.mp3`);
    setTheme();
  };

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name=theme-color]');

    if (metaThemeColor) metaThemeColor.setAttribute('content', THEME[themeType].header);
  }, [themeType]);

  return { handleChange, tooltip, isLightMode };
};
