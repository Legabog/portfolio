import { ThemeState } from '@widgets/header';
import { Locale } from '@locales';

export const PLANETS_VARIANTS: { [key in ThemeState['themeType']]: { [key in Locale]: string } } = {
  dark: {
    ru: 'xNaufbsbqExRyBRR',
    en: 'K5DNOSzN3shyP528',
  },
  light: {
    ru: 'SftG2fDlL2b9uko7',
    en: 'orWMmaTJcO82Eu-h',
  },
};
