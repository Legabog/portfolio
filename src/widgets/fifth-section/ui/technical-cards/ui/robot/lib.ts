import { useEffect, useState } from 'react';

import { THEME } from '@shared/constants';
import { useThemeStore } from '@widgets/header';

export const useLogic = () => {
  const { themeType } = useThemeStore();
  const [bodyState, setBodyState] = useState<0 | 1 | 2>(0);
  const [heartState, setHeartState] = useState<0 | 1>(0);

  const { backgroundColor } = THEME[themeType];

  useEffect(() => {
    const bodyTimerId = setInterval(
      () => setBodyState((prev) => (prev === 2 ? 0 : (++prev as 1 | 2))),
      1000,
    );
    const heartTimerId = setInterval(() => setHeartState((prev) => (prev === 0 ? 1 : 0)), 500);

    return () => [bodyTimerId, heartTimerId].forEach(clearInterval);
  }, []);

  return { bodyState, backgroundColor, heartState };
};
