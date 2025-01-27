import { useCallback, useState } from 'react';

export const useThrottle = (callback: () => void, delay: number = 2000) => {
  const [isThrottled, setIsThrottled] = useState<boolean>(false);

  const throttledCallback = useCallback(() => {
    if (!isThrottled) {
      callback();
      setIsThrottled(true);
      setTimeout(() => setIsThrottled(false), delay);
    }
  }, [isThrottled, callback, delay]);

  return throttledCallback;
};
