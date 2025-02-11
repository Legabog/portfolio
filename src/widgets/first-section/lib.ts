import { useTranslations } from 'next-intl';

import { useObserverDetectSection } from '@shared/hooks';
import { useFirstSectionStore } from './model';

export const useLogic = () => {
  const { isVisible, setIsVisible } = useFirstSectionStore();
  const ref = useObserverDetectSection(setIsVisible);
  const t = useTranslations('FirstSection.ScrollDown');

  const sectionText = t('text');

  return { isVisible, ref, sectionText };
};
