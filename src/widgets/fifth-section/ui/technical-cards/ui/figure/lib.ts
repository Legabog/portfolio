import { useEffect, useState } from 'react';

export const useLogic = () => {
  const [bodyState, setBodyState] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    const bodyTimerId = setInterval(
      () => setBodyState((prev) => (prev === 3 ? 0 : (++prev as 1 | 2 | 3))),
      500,
    );

    return () => [bodyTimerId].forEach(clearInterval);
  }, []);

  return { bodyState };
};
