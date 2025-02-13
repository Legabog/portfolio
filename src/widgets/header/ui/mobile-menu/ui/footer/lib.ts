import { useTranslations } from 'next-intl';

export const useLogic = () => {
  const t = useTranslations('Header.MobileMenu.Footer');
  const text = `@ 2025 ${t('text')}`;

  return { text };
};
