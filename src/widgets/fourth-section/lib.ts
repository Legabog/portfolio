import { useTranslations } from 'next-intl';

import { useObserverDetectSection } from '@shared/hooks';
import { useSecondSectionStore } from '@widgets/second-section';
import { useThirdSectionStore } from '@widgets/third-section';
import { useFourthSectionStore } from './model';

export const useLogic = () => {
  const { setIsIgnore: setIsIgnoreSecondSection } = useSecondSectionStore();
  const { setIsIgnore: setIsIgnoreThirdSection } = useThirdSectionStore();
  const { isVisible, setIsVisible, isIgnore } = useFourthSectionStore();
  const ref = useObserverDetectSection(
    setIsVisible,
    isIgnore,
    [setIsIgnoreSecondSection, setIsIgnoreThirdSection],
    0.2,
  );

  const t = useTranslations('FourthSection.ScrollDown');
  const f = useTranslations(`FourthSection.FourthSectionTitle`);

  const title = f('text');
  const sectionText = t('text');

  return { ref, title, sectionText, isVisible };
};
