import { useThrottle } from '@shared/hooks';
import { useFifthSectionStore } from '@widgets/fifth-section';
import { useFourthSectionStore } from '@widgets/fourth-section';
import { useSoundEffectsStore } from '@widgets/header';
import { useSecondSectionStore } from '@widgets/second-section';
import { useThirdSectionStore } from '@widgets/third-section';
import { Props } from './types';

export const useLogic = ({ activeSectionId, sectionId }: Omit<Props, 'id'>) => {
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

  const onClick = () => {
    const secondSection = document.getElementById('second-section');
    const thirdSection = document.getElementById('third-section');
    const fourthSection = document.getElementById('fourth-section');
    const fifthSection = document.getElementById('fifth-section');

    if (sectionId === 'second-section') {
      secondSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsVisibleSecondSection(false);
      setIsIgnoreSecondSection(false);
    } else if (sectionId === 'third-section') {
      thirdSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsVisibleThirdSection(false);
      setIsIgnoreThirdSection(false);
    } else if (sectionId === 'fourth-section') {
      fourthSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsVisibleFourthSection(false);
      setIsIgnoreFourthSection(false);
    } else {
      fifthSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsVisibleFifthSection(false);
      setIsIgnoreFifthSection(false);
    }
    play('navigation-1.wav');
  };
  const throttledOnClick = useThrottle(onClick, 1000);

  return { throttledOnClick, isActive };
};
