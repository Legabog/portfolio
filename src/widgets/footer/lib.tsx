import { useMediaQuery } from '@shared/hooks';
import { IconSection, Rights, Socials } from './ui';
import { MobileWrapper } from './footer.styled';

export const useLogic = () => {
  const isBreakpoint = useMediaQuery(600);

  const conditionalPanel = isBreakpoint ? (
    <>
      <MobileWrapper>
        <IconSection />
        <Rights />
      </MobileWrapper>
      <Socials />
    </>
  ) : (
    <>
      <IconSection />
      <Socials />
      <Rights />
    </>
  );

  return { conditionalPanel };
};
