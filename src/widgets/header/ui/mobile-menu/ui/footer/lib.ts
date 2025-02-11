import { useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation } from '@shared/hooks';

export const useLogic = () => {
  const t = useTranslations('Header.MobileMenu.Footer');
  const text = `@ 2025 ${t('text')}`;
  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(text);

  return { text, generatedString, animate, clear };
};
