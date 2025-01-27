import { useThrottle } from '@shared/hooks';
import { useSoundEffectsStore } from '@widgets/header';
import { useFirstSectionStore } from '@widgets/first-section';
import { useSecondSectionStore } from '@widgets/second-section';
import { useThirdSectionStore } from '@widgets/third-section';
import { useFourthSectionStore } from '@widgets/fourth-section';
import { useFifthSectionStore } from '@widgets/fifth-section';
import { Props } from './types';

export const useLogic = ({ type, activeSectionId }: Props) => {
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

  const onClick = () => {
    const firstSection = document.getElementById('first-section');
    const secondSection = document.getElementById('second-section');
    const thirdSection = document.getElementById('third-section');
    const fourthSection = document.getElementById('fourth-section');
    const fifthSection = document.getElementById('fifth-section');

    if (activeSectionId === 'second-section') {
      if (type === 'top') {
        firstSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsVisibleFirstSection(false, true);
      } else {
        thirdSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsVisibleThirdSection(false);
        setIsIgnoreThirdSection(false);
      }
      play('navigation-1.wav');
    } else if (activeSectionId === 'third-section') {
      if (type === 'top') {
        secondSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsVisibleSecondSection(false);
        setIsIgnoreSecondSection(false);
      } else {
        fourthSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsIgnoreFourthSection(false);
        setIsVisibleFourthSection(false);
      }
      play('navigation-1.wav');
    } else if (activeSectionId === 'fourth-section') {
      if (type === 'top') {
        thirdSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsVisibleThirdSection(false);
        setIsIgnoreThirdSection(false);
      } else {
        fifthSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsIgnoreFifthSection(false);
        setIsVisibleFifthSection(false);
      }
      play('navigation-1.wav');
    } else {
      if (type === 'top') {
        fourthSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsVisibleFourthSection(false);
        setIsIgnoreFourthSection(false);
      }
      play('navigation-1.wav');
    }
  };
  const throttledOnClick = useThrottle(onClick, 1000);

  return { throttledOnClick, isBottomAndLastSection };
};
