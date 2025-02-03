import { useEffect } from 'react';

import { useCommonScrollStore } from './model';

export const useLogic = () => {
  const { isVisible, setIsVisible } = useCommonScrollStore();

  useEffect(() => {
    const checkOverlap = () => {
      const commonScrollSection = document.getElementById('navigation-panel');
      const linkifyCard = document.getElementById('linkify-card');
      const musicOnCard = document.getElementById('musicon-card');
      const vtbCard = document.getElementById('vtb-card');

      console.log('isVisible---', isVisible);
      console.log('linkifyCard---', linkifyCard);
      console.log('musicOnCard---', musicOnCard);
      console.log('vtbCard---', vtbCard);

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

          return (
            !(
              commonScrollSectionRect.right < targetRef.left ||
              commonScrollSectionRect.left > targetRef.right ||
              commonScrollSectionRect.bottom < targetRef.top ||
              commonScrollSectionRect.top > targetRef.bottom
            ) && setIsVisible(false)
          );
        };
        ['linkify', 'musicon', 'vtb'].forEach((type) =>
          overlappingTypeSetter(type as FourthSection.OverlappingType),
        );
      }
    };
    window.addEventListener('scroll', checkOverlap);

    return () => {
      window.removeEventListener('scroll', checkOverlap);
    };
  }, [isVisible, setIsVisible]);

  return { isVisible };
};
