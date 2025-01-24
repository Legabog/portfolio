import { FC, useLayoutEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { ChevronDownIcon } from '@shared/ui/icons';
import { useSoundEffectsStore } from '@widgets/header';
import { useFirstSectionStore } from '@widgets/first-section';
import { Wrapper } from './navigate-button.styled';

export const NavigateButton: FC = () => {
  const { setIsVisible: setIsVisibleFirstSection } = useFirstSectionStore();
  const { play } = useSoundEffectsStore();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isInitalized, setIsInitialized] = useState<boolean>(false);
  const t = useTranslations('NavigateButton');
  const text = t('text');
  const firstSection = document.getElementById('first-section');

  const onClick = () => {
    firstSection?.scrollIntoView({ behavior: 'smooth' });
    setIsVisibleFirstSection(false, true);
    play('navigation-1.wav');
  };

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        setIsVisible(!isIntersecting);
        if (!isIntersecting) setIsInitialized(true);
      },
      { threshold: 0.001 },
    );

    if (firstSection) observer.observe(firstSection);

    return () => {
      if (firstSection) observer.unobserve(firstSection);
    };
  }, [firstSection, isVisible]);

  return (
    <Wrapper
      $isInitalized={ isInitalized }
      $isVisible={ isVisible }
      data-testid='navigate-button'
      title={ text }
      onClick={ onClick }
    >
      <ChevronDownIcon />
    </Wrapper>
  );
};
