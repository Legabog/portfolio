import { useTranslations } from 'next-intl';

import { useObserverDetectSection } from '@shared/hooks';
import { useSecondSectionStore } from '@widgets/second-section';
import { useThirdSectionStore } from './model';

export const useLogic = () => {
  const { setIsIgnore } = useSecondSectionStore();
  const { isVisible, setIsVisible, isIgnore } = useThirdSectionStore();
  const ref = useObserverDetectSection(setIsVisible, isIgnore, [setIsIgnore]);
  const t = useTranslations('ThirdSection.ScrollDown');
  const f = useTranslations(`ThirdSection.ThirdSectionTitle`);

  const sectionText = t('text');
  const title = f('text');

  return { ref, isVisible, sectionText, title };
};
