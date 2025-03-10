import { useLocale, useTranslations } from 'next-intl';

import { PDF_PART } from '@shared/constants';
import { useSoundEffectsStore } from '@widgets/header';
import { Locale } from '@locales';
import { Props } from './types';

export const useLogic = (id: Props['id'], url: Props['url']) => {
  const locale = useLocale() as Locale;
  const t = useTranslations('Header.info-section');
  const { play } = useSoundEffectsStore();

  const text = t(`section-${id}`);
  const conditionalUrl = id === '3' ? `https://drive.google.com/file/d/${PDF_PART[locale]}/view?usp=sharing` : url;

  const onClick = () => play('navigation-1.wav');

  return { text, conditionalUrl, onClick };
};
