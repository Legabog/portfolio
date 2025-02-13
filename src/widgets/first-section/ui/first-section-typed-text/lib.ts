import { useLocale, useTranslations } from 'next-intl';

import { Locale } from '@locales';

export const useLogic = () => {
  const locale = useLocale() as Locale;
  const t = useTranslations(`FirstSection.FirstSectionTypedText`);

  const title = t('first');
  const description = t('description');
  const secondTitle = t('second');
  const animatedFirstPart = t('main-1');
  const animatedSecondPart = t('main-2');
  const isRuLanguage = locale === 'ru';

  return {
    title,
    description,
    secondTitle,
    animatedFirstPart,
    animatedSecondPart,
    isRuLanguage,
  };
};
