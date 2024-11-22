import { ThemeState } from '@widgets/header';
import { Locale } from '@locales';

export const BRAIN_VARIANTS: {
  [key in 'desktop' | 'mobile']: { [key in ThemeState['themeType']]: { [key in Locale]: string } };
} = {
  desktop: {
    dark: {
      ru: '9CHsG9oQYfbSg6K8',
      en: '2NrEbnagCdf6yD6e',
    },
    light: {
      ru: 'xQkOmUYTSzIIBxdi',
      en: '6GcWzpVWEOxO91mA',
    },
  },
  mobile: {
    dark: {
      ru: 'bXiKOVZ1WN1UnDwg',
      en: 'ecM7Zn-vjo4cBmcs',
    },
    light: {
      ru: 'I0GGzFQInn8uXjHR',
      en: 'DLg12FQVQUMlnVeR',
    },
  },
};
