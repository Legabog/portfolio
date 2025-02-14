import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import { useMediaQuery } from '@shared/hooks';
import { THEME } from '@shared/constants';
import { useSoundEffectsStore } from '@widgets/header';
import { useThemeStore } from './model';

export const useLogic = () => {
  const isBreakPoint = useMediaQuery(900);
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
    if (isBreakPoint) {
      const setColors = () => {
        let metaThemeColor = document.querySelector('meta[name=theme-color]');
        let appleStatusBar = document.querySelector(
          'meta[name=apple-mobile-web-app-status-bar-style]',
        );

        if (!metaThemeColor) {
          metaThemeColor = document.createElement('meta');
          metaThemeColor.setAttribute('name', 'theme-color');
          document.head.appendChild(metaThemeColor);
        }
        if (!appleStatusBar) {
          appleStatusBar = document.createElement('meta');
          appleStatusBar.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
          document.head.appendChild(appleStatusBar);
        }

        const { header, backgroundColor } = THEME[themeType];
        const conditionColor = window.scrollY <= 0 ? header : backgroundColor;

        metaThemeColor.setAttribute('content', conditionColor);
        appleStatusBar.setAttribute('content', conditionColor);
      };

      setColors();
      window.addEventListener('scroll', setColors);

      return () => window.removeEventListener('scroll', setColors);
    }
  }, [themeType, isBreakPoint]);

  return { handleChange, tooltip, isLightMode };
};
