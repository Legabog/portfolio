import { useMediaQuery } from '@shared/hooks';
import { InfoSection, MobileMenu, SwitcherSection } from './ui';

export const useLogic = () => {
  const isBreakpoint = useMediaQuery(900);

  const conditionalPanel = isBreakpoint ? (
    <MobileMenu />
  ) : (
    <>
      <SwitcherSection />
      <InfoSection />
    </>
  );

  return { conditionalPanel };
};
