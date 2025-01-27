import { useEffect, useLayoutEffect, useState } from 'react';

import { SectionIds } from './types';

export const useLogic = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isInitalized, setIsInitialized] = useState<boolean>(false);
  const [activeSectionId, setActiveSectionId] = useState<SectionIds>('second-section');

  useLayoutEffect(() => {
    const firstSection = document.getElementById('first-section');
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
  }, [isVisible]);

  useEffect(() => {
    const checkOverlap = () => {
      const navigationPanel = document.getElementById('navigation-panel');
      const secondSection = document.getElementById('second-section');
      const thirdSection = document.getElementById('third-section');
      const fourthSection = document.getElementById('fourth-section');
      const fifthSection = document.getElementById('fifth-section');

      if (secondSection && thirdSection && fourthSection && fifthSection && navigationPanel) {
        const navigationPanelRect = navigationPanel.getBoundingClientRect();
        const secondSectionRect = secondSection.getBoundingClientRect();
        const thirdSectionRect = thirdSection.getBoundingClientRect();
        const fourthSectionRect = fourthSection.getBoundingClientRect();
        const fifthSectionRect = fifthSection.getBoundingClientRect();

        const overlappingTypeSetter = (type: typeof activeSectionId) => {
          const targetRef = {
            'second-section': secondSectionRect,
            'third-section': thirdSectionRect,
            'fourth-section': fourthSectionRect,
            'fifth-section': fifthSectionRect,
          }[type];

          return (
            !(
              navigationPanelRect.right < targetRef.left ||
              navigationPanelRect.left > targetRef.right ||
              navigationPanelRect.bottom < targetRef.top ||
              navigationPanelRect.top > targetRef.bottom
            ) && setActiveSectionId(type)
          );
        };
        ['second-section', 'third-section', 'fourth-section', 'fifth-section'].forEach((type) =>
          overlappingTypeSetter(type as typeof activeSectionId),
        );
      }
    };

    window.addEventListener('scroll', checkOverlap);

    return () => {
      window.removeEventListener('scroll', checkOverlap);
    };
  }, []);

  return { isVisible, isInitalized, activeSectionId };
};