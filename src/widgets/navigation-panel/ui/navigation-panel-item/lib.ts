import { useTranslations } from 'next-intl';

import { useThrottle } from '@shared/hooks';
import { useFifthSectionStore } from '@widgets/fifth-section';
import { useFourthSectionStore } from '@widgets/fourth-section';
import { useSoundEffectsStore } from '@widgets/header';
import { useSecondSectionStore } from '@widgets/second-section';
import { useThirdSectionStore } from '@widgets/third-section';
import { Props } from './types';

export const useLogic = ({ activeSectionId, sectionId }: Omit<Props, 'id'>) => {
  const t = useTranslations(`NavigationPanelItem`);
  const { setIsIgnore: setIsIgnoreSecondSection, setIsVisible: setIsVisibleSecondSection } =
    useSecondSectionStore();
  const { setIsIgnore: setIsIgnoreThirdSection, setIsVisible: setIsVisibleThirdSection } =
    useThirdSectionStore();
  const { setIsIgnore: setIsIgnoreFourthSection, setIsVisible: setIsVisibleFourthSection } =
    useFourthSectionStore();
  const { setIsIgnore: setIsIgnoreFifthSection, setIsVisible: setIsVisibleFifthSection } =
    useFifthSectionStore();
  const { play } = useSoundEffectsStore();

  const isActive = activeSectionId === sectionId;
  const title = isActive ? undefined : t(sectionId);

  const onClick = () => {
    if (!isActive) {
      const { setVisible, setIgnore } = (
        {
          'second-section': {
            setVisible: setIsVisibleSecondSection,
            setIgnore: setIsIgnoreSecondSection,
          },
          'third-section': {
            setVisible: setIsVisibleThirdSection,
            setIgnore: setIsIgnoreThirdSection,
          },
          'fourth-section': {
            setVisible: setIsVisibleFourthSection,
            setIgnore: setIsIgnoreFourthSection,
          },
          'fifth-section': {
            setVisible: setIsVisibleFifthSection,
            setIgnore: setIsIgnoreFifthSection,
          },
        } as {
          [key in Props['sectionId']]: {
            setIgnore: (isIgnore: boolean) => void;
            setVisible: (isVisible: boolean) => void;
          };
        }
      )[sectionId];
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setVisible(false);
      setIgnore(false);
      play('navigation-1.wav');
    }
  };
  const throttledOnClick = useThrottle(onClick, 1000);

  return { throttledOnClick, isActive, title };
};
