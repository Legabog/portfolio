import { MouseEvent } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation } from '@shared/hooks';
import { useSoundEffectsStore } from '@widgets/header';
import { useSecondSectionStore } from '@widgets/second-section';
import { useThirdSectionStore } from '@widgets/third-section';
import { useFourthSectionStore } from '@widgets/fourth-section';
import { useFifthSectionStore } from '@widgets/fifth-section';
import { Item } from './types';

export const useLogic = ({ elementId, id }: Item) => {
  const { setIsIgnore: setIsIgnoreSecondSection, setIsVisible: setIsVisibleSecondSection } =
    useSecondSectionStore();
  const { setIsIgnore: setIsIgnoreThirdSection, setIsVisible: setIsVisibleThirdSection } =
    useThirdSectionStore();
  const { setIsIgnore: setIsIgnoreFourthSection, setIsVisible: setIsVisibleFourthSection } =
    useFourthSectionStore();
  const { setIsIgnore: setIsIgnoreFifthSection, setIsVisible: setIsVisibleFifthSection } =
    useFifthSectionStore();
  const t = useTranslations('FirstSection.FirstSectionTypedText.Navigator');
  const path = useLocale();
  const text = t(`item-${id}`);
  const linkText = `${id}  /  ${text}`;
  const { play } = useSoundEffectsStore();
  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(linkText);

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    play('navigation-1.wav');
    const element = document.getElementById(elementId);
    const block = ['01', '03', '04'].includes(id) ? 'start' : 'end';
    element?.scrollIntoView({ behavior: 'smooth', block });

    const sectionVisibilityMap = (
      {
        '01': () => {
          setIsVisibleSecondSection(false);
          setIsIgnoreSecondSection(false);
        },
        '02': () => {
          setIsIgnoreSecondSection(true);
          setIsVisibleThirdSection(false);
          setIsIgnoreThirdSection(false);
        },
        '03': () => {
          setIsIgnoreSecondSection(true);
          setIsIgnoreThirdSection(true);
          setIsIgnoreFourthSection(false);
          setIsVisibleFourthSection(false);
        },
        '04': () => {
          setIsIgnoreSecondSection(true);
          setIsIgnoreThirdSection(true);
          setIsIgnoreFourthSection(true);
          setIsIgnoreFifthSection(false);
          setIsVisibleFifthSection(false);
        },
      } as { [key: string]: () => void }
    )[id];

    sectionVisibilityMap();
  };

  return { path, text, onClick, animate, clear, generatedString, id };
};
