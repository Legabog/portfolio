import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { useSoundEffectsStore, useThemeStore } from '@widgets/header';
import { Props } from './types';

export const useLogic = (id: Props['id']) => {
  const t = useTranslations(`SecondSection.SecondSectionCards.card-${id}`);
  const { play } = useSoundEffectsStore();
  const { themeType } = useThemeStore();

  const [flip, setFlip] = useState<boolean>(false);

  const orderText = `/ 0${id}`;
  const frontTitle = t('front.title');
  const frontDescription = t('front.description');
  const backTitle = t('back.title');
  const backDescription = t('back.description');
  const firstTyped = t('back.typed-1');
  const secondTyped = t('back.typed-2');
  const thirdTyped = t('back.typed-3');

  const onClick = () => {
    play('wooshing-1.wav');
    setFlip((prev) => !prev);
  };

  return {
    flip,
    onClick,
    orderText,
    frontTitle,
    frontDescription,
    backTitle,
    themeType,
    firstTyped,
    secondTyped,
    thirdTyped,
    backDescription,
  };
};
