import { useEffect, useRef } from 'react';

export const useObserverDetectSection = (
  setIsVisible: (isVisible: boolean) => void,
  cond?: boolean,
  setIsIgnore?: ((isIgnore: boolean) => void)[],
  options: IntersectionObserverInit = { threshold: 0.5 },
) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionRef = ref.current as HTMLDivElement;
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) setIsVisible(true);
      else setIsIgnore?.forEach((set) => set(false));
    }, options);

    if (sectionRef && !cond) observer.observe(sectionRef);
    else observer.disconnect();

    return () => {
      if (sectionRef) observer.unobserve(sectionRef);
    };
  }, [setIsVisible, cond, JSON.stringify(options)]);

  return ref;
};
