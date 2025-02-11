import { useState } from 'react';

import { useMediaQuery, useResizeObserver } from '@shared/hooks';

export const useLogic = () => {
  const isBreakpoint = useMediaQuery(900);
  const [caruselStyles, setCaruselStyles] = useState<string>(
    `width: ${window.innerWidth / (!isBreakpoint ? 2.5 : 1)}px;`,
  );
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const onHover = () => setIsPaused(true);
  const onLeave = () => setIsPaused(false);

  const resizeHandler = () =>
    setCaruselStyles(`width: ${window.innerWidth / (!isBreakpoint ? 2.5 : 1)}px;`);
  const resizeRef = useResizeObserver(resizeHandler);

  return { caruselStyles, isPaused, onHover, onLeave, resizeRef };
};
