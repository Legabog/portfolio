import { useEffect, useRef } from 'react';

export const useObserverDetectSection = (setIsVisible: (isVisible: boolean) => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionRef = ref.current as HTMLDivElement;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    if (sectionRef) observer.observe(sectionRef);

    return () => {
      if (sectionRef) observer.unobserve(sectionRef);
    };
  }, [setIsVisible]);

  return ref;
};
