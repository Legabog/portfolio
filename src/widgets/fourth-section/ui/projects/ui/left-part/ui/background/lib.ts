import { useState } from 'react';

import { useResizeObserver } from '@shared/hooks';

export const useLogic = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  const resizeHandler = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  const resizeRef = useResizeObserver(resizeHandler);

  return { width, height, resizeRef };
};
