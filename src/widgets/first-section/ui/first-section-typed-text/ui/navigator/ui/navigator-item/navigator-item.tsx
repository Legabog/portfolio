'use-client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation } from '@shared/hooks';
import { useSoundEffectsStore } from '@widgets/header';
import { Item } from './types';
import { Wrapper, Text } from './navigator-item.styled';

export const NavigatorItem: FC<Item> = ({ id }) => {
  const t = useTranslations('Navigator');
  const text = t(`item-${id}`);
  const linkText = `${id}  /  ${text}`;
  const { play } = useSoundEffectsStore();
  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(linkText);

  const onClick = () => play('navigation-1.wav');

  return (
    <Wrapper
      data-testid={ `navigator-item-${id}` }
      title={ text }
      onClick={ onClick }
      onMouseEnter={ animate }
      onMouseLeave={ clear }
    >
      <Text>{generatedString}</Text>
    </Wrapper>
  );
};
