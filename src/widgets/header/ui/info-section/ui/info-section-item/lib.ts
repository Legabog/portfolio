import { useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation, useMediaQuery } from '@shared/hooks';
import { useSoundEffectsStore } from '@widgets/header';
import { Item } from './types';

export const useLogic = (id: Item['id']) => {
  const isBreakpoint = useMediaQuery(900);
  const t = useTranslations('Header.info-section');
  const text = t(`section-${id}`);
  const linkText = `${isBreakpoint ? '' : '</A> '}${text}`;
  const { play } = useSoundEffectsStore();
  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(linkText);

  const onClick = () => play('navigation-1.wav');

  return { text, generatedString, animate, clear, onClick };
};
