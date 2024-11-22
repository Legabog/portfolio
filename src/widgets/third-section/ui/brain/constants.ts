import { ThemeState } from '@widgets/header';
import { Locale } from '@locales';

export const BRAIN_VARIANTS: {
  [key in 'desktop' | 'mobile']: { [key in ThemeState['themeType']]: { [key in Locale]: string } };
} = {
  desktop: {
    dark: {
      ru: 'nPgqBUS6B5w9cGZj',
      en: '2NrEbnagCdf6yD6e',
    },
    light: {
      ru: '4gkVhJV1lWZQyJPj',
      en: 'R9j3ECqYQtVbrD4w',
    },
  },
  mobile: {
    dark: {
      ru: 'TOFWDyLLUf1gEaAl',
      en: 'raLmRZPAuREPy1C9',
    },
    light: {
      ru: 'SgaJ-gZnDoznvAuv',
      en: 'PRly5cp-1adMvN1v',
    },
  },
};
