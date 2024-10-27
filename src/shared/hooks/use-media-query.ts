import { useCallback, useLayoutEffect, useState } from 'react';

export const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => setTargetReached(e.matches), []);

  useLayoutEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener('change', updateTarget);

    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener('change', updateTarget);
  }, [updateTarget, width]);

  return targetReached;
};
