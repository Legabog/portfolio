import { useLocale, useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation, useMediaQuery } from '@shared/hooks';
import { useSoundEffectsStore } from '@widgets/header';
import { Locale } from '@locales';
import { Item } from './types';
import { PDF_LINK_PART } from './constants';

export const useLogic = (id: Item['id'], url: Item['url']) => {
  const locale = useLocale() as Locale;
  const isBreakpoint = useMediaQuery(900);
  const t = useTranslations('Header.info-section');

  const text = t(`section-${id}`);
  const linkText = `${isBreakpoint ? '' : '</A> '}${text}`;
  const conditionalUrl =
    id === '3' ? `https://drive.google.com/file/d/${PDF_LINK_PART[locale]}/view?usp=sharing` : url;

  const { play } = useSoundEffectsStore();
  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(linkText);

  const onClick = () => play('navigation-1.wav');

  return { text, generatedString, conditionalUrl, animate, clear, onClick };
};
