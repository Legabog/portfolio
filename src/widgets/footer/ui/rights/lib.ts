import { useTranslations } from 'next-intl';

import { useMediaQuery } from '@shared/hooks';

export const useLogic = () => {
  const isBreakpoint = useMediaQuery(600);
  const t = useTranslations('Footer');

  const rights = isBreakpoint ? t('rights') : ` ${t('rights')}`;
  const text = `@ 2025${isBreakpoint ? '' : rights}`;

  return { isBreakpoint, text, rights };
};
