import { useEffect, useRef } from 'react';

export const useResizeObserver = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | HTMLImageElement | null>(null);

  useEffect(() => {
    const refValue = ref.current;
    const observer = new ResizeObserver((entries) => entries.forEach(() => callback()));

    if (refValue) observer.observe(refValue);

    return () => {
      if (refValue) observer.unobserve(refValue);
    };
  }, [callback]);

  return ref;
};
