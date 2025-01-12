'use-client';

import { FC, MouseEvent } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation } from '@shared/hooks';
import { useSoundEffectsStore } from '@widgets/header';
import { Item } from './types';
import { StyledLink, Wrapper, Text } from './navigator-item.styled';

export const NavigatorItem: FC<Item> = ({ id, elementId }) => {
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
