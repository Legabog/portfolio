import { useState } from 'react';

import { useMediaQuery, useResizeObserver } from '@shared/hooks';

export const useLogic = () => {
  const isBreakpoint = useMediaQuery(900);
  const conditionalWidth = isBreakpoint
    ? `width: ${window.innerWidth - 40}px;`
    : `width: ${window.innerWidth * 0.8}px;`;
  const [caruselStyles, setCaruselStyles] = useState<string>(conditionalWidth);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const onHover = () => setIsPaused(true);
  const onLeave = () => setIsPaused(false);

  const resizeHandler = () => setCaruselStyles(conditionalWidth);
  const resizeRef = useResizeObserver(resizeHandler);

  return { caruselStyles, isPaused, onHover, onLeave, resizeRef };
};
