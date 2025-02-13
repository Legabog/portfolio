import { MutableRefObject } from 'react';
import { useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation, useThrottle } from '@shared/hooks';
import { useSoundEffectsStore } from '@widgets/header';

export const useLogic = (
  overlappingType: FourthSection.OverlappingType,
  activeOverlappingType: FourthSection.OverlappingType,
  title: string,
  linkifyRef?: MutableRefObject<HTMLDivElement | null>,
  musiconRef?: MutableRefObject<HTMLDivElement | null>,
  vtbRef?: MutableRefObject<HTMLDivElement | null>,
) => {
  const t = useTranslations(
    `FourthSection.FourthSectionProjects.FourthSectionLeftPart.Card.NavigationSections.NavigationSectionItem`,
  );
  const { play } = useSoundEffectsStore();
  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(title);

  const isActive = overlappingType === activeOverlappingType;
  const tooltip = isActive ? '' : t(`tooltip.${overlappingType}`);

  const onMouseEnter = () => !isActive && animate();
  const onMouseLeave = () => clear();
  const onClick = () => {
    if (!isActive) {
      const mapRef = (
        {
          linkify: linkifyRef,
          musicon: musiconRef,
          vtb: vtbRef,
        } as { [key in FourthSection.OverlappingType]: MutableRefObject<HTMLDivElement | null> }
      )[overlappingType];
      mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      play('navigation-1.wav');
    }
  };
  const throttledOnClick = useThrottle(onClick, 1000);

  return { isActive, throttledOnClick, onMouseEnter, onMouseLeave, generatedString, tooltip };
};
