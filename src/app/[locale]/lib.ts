import { MouseEvent } from 'react';

import { useMediaQuery } from '@shared/hooks';

export const useLogic = () => {
  const isBreakpoint = useMediaQuery(900);

  const onMouseMoveHandler = ({ clientX, clientY }: MouseEvent<HTMLDivElement>) => {
    document.querySelectorAll('[id^="cell-"]').forEach((cell) => {
      const { left, right, top, bottom } = cell.getBoundingClientRect();
      const isInside = clientX > left && clientX < right && clientY > top && clientY < bottom;

      if (isInside) {
        (cell as HTMLDivElement).style.backgroundColor = 'rgb(232, 176, 89, 0.3)';
        setTimeout(() => {
          (cell as HTMLDivElement).style.backgroundColor = 'transparent';
        }, 1500);
      }
    });
  };

  return { onMouseMoveHandler, isBreakpoint };
};
