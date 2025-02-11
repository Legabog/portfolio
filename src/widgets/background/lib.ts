import { useState } from 'react';

import { useResizeObserver } from '@shared/hooks';

export const useLogic = () => {
  const calcHeight = (typeof window !== 'undefined' && window.innerHeight / 10) as number;
  const generatedArray = Array.from({
    length: Math.ceil((typeof window !== 'undefined' && window.innerWidth / calcHeight) as number),
  });
  const [cell, setCell] = useState<number>(calcHeight);
  const [cellArray, setCellArray] = useState<unknown[]>(generatedArray);

  const resizeHandler = () => {
    setCell(calcHeight);
    setCellArray(generatedArray);
  };
  const resizeRef = useResizeObserver(resizeHandler);

  return { cell, cellArray, resizeRef };
};
