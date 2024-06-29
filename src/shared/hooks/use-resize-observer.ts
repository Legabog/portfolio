import { useEffect, useRef } from 'react';

export const useResizeObserver = (callback: any) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const refValue = ref.current;
    const observer = new ResizeObserver((entries) =>
      entries.forEach((entry) => callback(entry.contentRect)),
    );

    if (refValue) observer.observe(refValue);

    return () => {
      if (refValue) observer.unobserve(refValue);
    };
  }, [callback]);

  return ref;
};
