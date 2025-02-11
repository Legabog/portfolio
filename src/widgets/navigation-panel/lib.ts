import { useEffect, useLayoutEffect } from 'react';

import { useNavigationPanelStore } from './model';
import { SectionIds } from './types';

export const useLogic = () => {
  const {
    isInitialized,
    isVisible,
    activeSectionId,
    setActiveSectionId,
    setIsInitialized,
    setIsVisible,
  } = useNavigationPanelStore();

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
  }, [isVisible, setIsInitialized, setIsVisible]);

  useEffect(() => {
    const checkOverlap = () => {
      const navigationPanel = document.getElementById('navigation-panel');
      const sections = ['second', 'third', 'fourth', 'fifth'].map((type) =>
        document.getElementById(`${type}-section`),
      );

      if (!navigationPanel || sections.some((s) => !s)) return;

      const navigationRect = navigationPanel.getBoundingClientRect();

      sections.forEach((section) => {
        const rect = section?.getBoundingClientRect() as DOMRect;
        const type = section?.id as SectionIds;

        if (
          !(
            navigationRect.right < rect.left ||
            navigationRect.left > rect.right ||
            navigationRect.bottom < rect.top ||
            navigationRect.top > rect.bottom
          )
        )
          setActiveSectionId(type);
      });
    };
    window.addEventListener('scroll', checkOverlap);

    return () => {
      window.removeEventListener('scroll', checkOverlap);
    };
  }, [setActiveSectionId]);

  return { isVisible, isInitialized, activeSectionId };
};
