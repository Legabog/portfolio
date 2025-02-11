import { useTranslations } from 'next-intl';

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

  return { handleChange, tooltip, isLightMode };
};
