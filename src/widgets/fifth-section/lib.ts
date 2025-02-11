import { useTranslations } from 'next-intl';

import { useObserverDetectSection } from '@shared/hooks';
import { useFifthSectionStore } from '@widgets/fifth-section/model';
import { useSecondSectionStore } from '@widgets/second-section';
import { useThirdSectionStore } from '@widgets/third-section';
import { useFourthSectionStore } from '@widgets/fourth-section';

export const useLogic = () => {
  const { setIsIgnore: setIsIgnoreSecondSection } = useSecondSectionStore();
  const { setIsIgnore: setIsIgnoreThirdSection } = useThirdSectionStore();
  const { setIsIgnore: setIsIgnoreFourthSection } = useFourthSectionStore();
  const { isVisible, setIsVisible, isIgnore } = useFifthSectionStore();
  const ref = useObserverDetectSection(setIsVisible, isIgnore, [
    setIsIgnoreSecondSection,
    setIsIgnoreThirdSection,
    setIsIgnoreFourthSection,
  ]);
  const t = useTranslations(`FifthSection.FifthSectionTitle`);

  const title = t('text');

  return { isVisible, ref, title };
};
