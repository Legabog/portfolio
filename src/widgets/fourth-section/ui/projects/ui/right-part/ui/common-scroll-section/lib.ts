import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import { useCommonScrollStore } from './model';

export const useLogic = () => {
  const { isVisible, setIsVisible, isPlayingAnimation, setIsPlayingAnimation } =
    useCommonScrollStore();
  const t = useTranslations(
    `FourthSection.FourthSectionProjects.FourthSectionRightPart.CommonScrollSection`,
  );
  const text = t('text');

  useEffect(() => {
    const checkOverlap = () => {
      const commonScrollSection = document.getElementById('common-scroll-section');
      const linkifyCard = document.getElementById('linkify-card');
      const musicOnCard = document.getElementById('musicon-card');
      const vtbCard = document.getElementById('vtb-card');

      if (linkifyCard && musicOnCard && vtbCard && commonScrollSection) {
        const commonScrollSectionRect = commonScrollSection.getBoundingClientRect();
        const linkifyCardRect = linkifyCard.getBoundingClientRect();
        const musicOnCardRect = musicOnCard.getBoundingClientRect();
        const vtbCardRect = vtbCard.getBoundingClientRect();

        const overlappingTypeSetter = (type: FourthSection.OverlappingType) => {
          const targetRef = {
            linkify: linkifyCardRect,
            musicon: musicOnCardRect,
            vtb: vtbCardRect,
          }[type];
          const lastSectionPlace = commonScrollSectionRect.y > vtbCardRect.y;
          const intersectionCondition =
            !(
              commonScrollSectionRect.right < targetRef.left ||
              commonScrollSectionRect.left > targetRef.right ||
              commonScrollSectionRect.bottom < targetRef.top ||
              commonScrollSectionRect.top > targetRef.bottom
            ) || lastSectionPlace;

          setIsPlayingAnimation(!lastSectionPlace);

          return intersectionCondition;
        };

        setIsVisible(
          ['linkify', 'musicon', 'vtb']
            .map((type) => overlappingTypeSetter(type as FourthSection.OverlappingType))
            .filter((value) => value === false).length === 3,
        );
      }
    };
    window.addEventListener('scroll', checkOverlap);

    return () => {
      window.removeEventListener('scroll', checkOverlap);
    };
  }, [setIsVisible, setIsPlayingAnimation]);

  return { isVisible, isPlayingAnimation, text };
};
