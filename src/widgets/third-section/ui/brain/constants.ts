import { ThemeState } from '@widgets/header';
import { Locale } from '@locales';

export const BRAIN_VARIANTS: { [key in ThemeState['themeType']]: { [key in Locale]: string } } = {
  dark: {
    ru: 'xgiHCRtcVsbjIgGM',
    en: 'xWfbQ1dWnmYIGBDr',
  },
  light: {
    ru: 'f0QfGcXtdk7PMVgF',
    en: 'MGz6m6545xGiYPY5',
  },
};
