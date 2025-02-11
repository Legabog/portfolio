import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { useObserverDetectSection } from '@shared/hooks';
import { useSecondSectionStore } from './model';

export const useLogic = () => {
  const { isVisible, setIsVisible, isIgnore } = useSecondSectionStore();
  const ref = useObserverDetectSection(setIsVisible, isIgnore);
  const t = useTranslations('SecondSection.ScrollDown');
  const f = useTranslations(`SecondSection.SecondSectionTitle`);

  const [isFullHeight, setIsFullHeight] = useState<boolean>(false);

  const sectionText = t('text');
  const title = f('text');
  const titleWithoutLastWord = title.split(' ')[0];

  useEffect(() => {
    setIsFullHeight(
      (document.getElementById('second-section')?.scrollHeight as number) <= window.innerHeight,
    );
  }, []);

  return { ref, isFullHeight, isVisible, titleWithoutLastWord, title, sectionText };
};
