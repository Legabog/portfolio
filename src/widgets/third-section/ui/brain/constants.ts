import { ThemeState } from '@widgets/header';
import { Locale } from '@locales';

export const BRAIN_VARIANTS: {
  [key in 'desktop' | 'mobile']: { [key in ThemeState['themeType']]: { [key in Locale]: string } };
} = {
  desktop: {
    dark: {
      ru: 'AcdB438zzZy6WSBY',
      en: 'S1XjmIyqXUVUreIp',
    },
    light: {
      ru: 'xQkOmUYTSzIIBxdi',
      en: '6GcWzpVWEOxO91mA',
    },
  },
  mobile: {
    dark: {
      ru: 'bXiKOVZ1WN1UnDwg',
      en: 'sSGnlHFPJSaSIweZ',
    },
    light: {
      ru: 'I0GGzFQInn8uXjHR',
      en: 'W00fNMlS6-gN2Vyw',
    },
  },
};
