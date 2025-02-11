import { useTranslations, useLocale } from 'next-intl';

import { useHoverRandomLettersAnimation } from '@shared/hooks';
import { useSoundEffectsStore } from '@widgets/header';
import { Locale, usePathname, useRouter } from '@locales';
import { Props } from './types';

export const useLogic = ({ id, text }: Props) => {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const { play } = useSoundEffectsStore();
  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(text);

  const t = useTranslations('Header.language');
  const tooltip = t(`tooltip-${id}`);
  const isActive = locale === text;

  const handleChange = (locale: Locale) => {
    play('click-1.wav');
    router.replace(pathname, { locale, scroll: false });
  };

  return {
    tooltip,
    isActive,
    animate,
    clear,
    generatedString,
    handleChange,
    id,
    text,
  };
};
