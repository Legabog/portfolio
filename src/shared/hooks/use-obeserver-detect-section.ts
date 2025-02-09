import { useEffect, useRef } from 'react';

export const useObserverDetectSection = (
  setIsVisible: (isVisible: boolean) => void,
  cond?: boolean,
  setIsIgnore?: ((isIgnore: boolean) => void)[],
  threshold: IntersectionObserverInit['threshold'] = 0.5,
) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionRef = ref.current as HTMLDivElement;
    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) setIsVisible(true);
        else setIsIgnore?.forEach((set) => set(false));
      },
      { threshold },
    );

    if (sectionRef && !cond) observer.observe(sectionRef);
    else observer.disconnect();

    return () => sectionRef && observer.unobserve(sectionRef);
  }, [cond, setIsVisible, threshold]);

  return ref;
};
