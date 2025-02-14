import { useState, useEffect } from 'react';

import { useMediaQuery } from '@shared/hooks';

export const useLogic = () => {
  const isBreakpoint = useMediaQuery(900);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setIsScrolled(window.scrollY > 0));
    return () => window.removeEventListener('scroll', () => setIsScrolled(window.scrollY > 0));
  }, []);

  return { isScrolled, isBreakpoint };
};
