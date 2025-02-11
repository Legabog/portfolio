import { useLayoutEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { useThrottle } from '@shared/hooks';
import { useSoundEffectsStore } from '@widgets/header';
import { useFirstSectionStore } from '@widgets/first-section';

export const useLogic = () => {
  const { setIsVisible: setIsVisibleFirstSection } = useFirstSectionStore();
  const { play } = useSoundEffectsStore();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isInitalized, setIsInitialized] = useState<boolean>(false);
  const t = useTranslations('NavigateButton');

  const text = t('text');
  const firstSection = document.getElementById('first-section');

  const onClick = () => {
    firstSection?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setIsVisibleFirstSection(false, true);
    play('navigation-1.wav');
  };
  const throttledCallback = useThrottle(onClick);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        setIsVisible(!isIntersecting);
        if (!isIntersecting) setIsInitialized(true);
      },
      { threshold: 0.1 },
    );

    if (firstSection) observer.observe(firstSection);

    return () => {
      if (firstSection) observer.unobserve(firstSection);
    };
  }, [firstSection, isVisible]);

  return { isVisible, isInitalized, text, throttledCallback };
};
