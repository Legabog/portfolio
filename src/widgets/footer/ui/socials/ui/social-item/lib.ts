import { useTranslations } from 'next-intl';

import { useSoundEffectsStore } from '@widgets/header';
import { Props } from './types';

export const useLogic = (id: Props['id']) => {
  const t = useTranslations('Header.info-section');
  const { play } = useSoundEffectsStore();

  const text = t(`section-${id}`);

  const onClick = () => play('navigation-1.wav');

  return { text, onClick };
};
