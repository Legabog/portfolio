import { useTranslations } from 'next-intl';

import { useThrottle } from '@shared/hooks';
import { useSoundEffectsStore } from '@widgets/header';
import { useFirstSectionStore } from '@widgets/first-section';
import { useSecondSectionStore } from '@widgets/second-section';
import { useThirdSectionStore } from '@widgets/third-section';
import { useFourthSectionStore } from '@widgets/fourth-section';
import { useFifthSectionStore } from '@widgets/fifth-section';
import { Props } from './types';

export const useLogic = ({ type, activeSectionId }: Props) => {
  const t = useTranslations(`NavigationPanelButton.${type}`);
  const { setIsVisible: setIsVisibleFirstSection } = useFirstSectionStore();
  const { setIsIgnore: setIsIgnoreSecondSection, setIsVisible: setIsVisibleSecondSection } =
    useSecondSectionStore();
  const { setIsIgnore: setIsIgnoreThirdSection, setIsVisible: setIsVisibleThirdSection } =
    useThirdSectionStore();
  const { setIsIgnore: setIsIgnoreFourthSection, setIsVisible: setIsVisibleFourthSection } =
    useFourthSectionStore();
  const { setIsIgnore: setIsIgnoreFifthSection, setIsVisible: setIsVisibleFifthSection } =
    useFifthSectionStore();
  const { play } = useSoundEffectsStore();

  const isBottomAndLastSection = type === 'bottom' && activeSectionId === 'fifth-section';
  const title = isBottomAndLastSection ? undefined : t(activeSectionId);

  const onClick = () => {
    const sections = [
      {
        id: 'first-section',
        element: document.getElementById('first-section'),
        setVisible: setIsVisibleFirstSection,
        setIgnore: null,
      },
      {
        id: 'second-section',
        element: document.getElementById('second-section'),
        setVisible: setIsVisibleSecondSection,
        setIgnore: setIsIgnoreSecondSection,
      },
      {
        id: 'third-section',
        element: document.getElementById('third-section'),
        setVisible: setIsVisibleThirdSection,
        setIgnore: setIsIgnoreThirdSection,
      },
      {
        id: 'fourth-section',
        element: document.getElementById('fourth-section'),
        setVisible: setIsVisibleFourthSection,
        setIgnore: setIsIgnoreFourthSection,
      },
      {
        id: 'fifth-section',
        element: document.getElementById('fifth-section'),
        setVisible: setIsVisibleFifthSection,
        setIgnore: setIsIgnoreFifthSection,
      },
    ];

    const currentIndex = sections.findIndex(({ id }) => id === activeSectionId);
    const targetIndex = type === 'top' ? currentIndex - 1 : currentIndex + 1;

    if (targetIndex >= 0 && targetIndex < sections.length) {
      const { element, setVisible, setIgnore } = sections[targetIndex];
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setVisible(false);
      if (setIgnore) setIgnore(false);
    }
    play('navigation-1.wav');
  };
  const throttledOnClick = useThrottle(onClick, 1000);

  return { throttledOnClick, isBottomAndLastSection, title, type };
};
