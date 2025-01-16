'use-client';

import { FC, MouseEvent } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation } from '@shared/hooks';
import { useSoundEffectsStore } from '@widgets/header';
import { useSecondSectionStore } from '@widgets/second-section';
import { useThirdSectionStore } from '@widgets/third-section';
import { useFourthSectionStore } from '@widgets/fourth-section';
import { Item } from './types';
import { StyledLink, Wrapper, Text } from './navigator-item.styled';

export const NavigatorItem: FC<Item> = ({ id, elementId }) => {
  const { setIsIgnore: setIsIgnoreSecondSection, setIsVisible: setIsVisibleSecondSection } =
    useSecondSectionStore();
  const { setIsIgnore: setIsIgnoreThirdSection, setIsVisible: setIsVisibleThirdSection } =
    useThirdSectionStore();
  const { setIsIgnore: setIsIgnoreFourthSection, setIsVisible: setIsVisibleFourthSection } =
    useFourthSectionStore();
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

    if (id === '01') {
      setIsVisibleSecondSection(false);
      setIsIgnoreSecondSection(false);
    }
    if (id === '02') {
      setIsIgnoreSecondSection(true);
      setIsVisibleThirdSection(false);
      setIsIgnoreThirdSection(false);
    }
    if (id === '03') {
      setIsIgnoreSecondSection(true);
      setIsIgnoreThirdSection(true);
      setIsIgnoreFourthSection(false);
      setIsVisibleFourthSection(false);
    }
  };

  return (
    <StyledLink
      data-testid={ `navigator-item-${id}` }
      href={ path }
      title={ text }
      onClick={ onClick }
      onMouseEnter={ animate }
      onMouseLeave={ clear }
    >
      <Wrapper>
        <Text>{generatedString}</Text>
      </Wrapper>
    </StyledLink>
  );
};
