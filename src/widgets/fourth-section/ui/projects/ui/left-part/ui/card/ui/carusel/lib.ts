import { useState } from 'react';

import { useResizeObserver } from '@shared/hooks';
import { Props } from './types';

export const useLogic = (customStyles: Props['customStyles']) => {
  const [caruselStyles, setCaruselStyles] = useState<string>(
    `width: ${window.innerWidth / 2.5}px; height: calc(12vh);`,
  );
  const [wordStyles, setWordStyles] = useState<string>(
    `font-size: 10vh; line-height: 10vh; letter-spacing: -0.4vh;`,
  );
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const customCaruselStyles = `${caruselStyles} ${customStyles}`;

  const onHover = () => setIsPaused(true);
  const onLeave = () => setIsPaused(false);
  const resizeHandler = () => {
    setCaruselStyles(`width: ${window.innerWidth / 2.5}px; height: calc(12vh);`);
    setWordStyles(`font-size: 10vh; line-height: 10vh; letter-spacing: -0.4vh;`);
  };
  const resizeRef = useResizeObserver(resizeHandler);

  return { customCaruselStyles, wordStyles, isPaused, onHover, onLeave, resizeRef };
};
