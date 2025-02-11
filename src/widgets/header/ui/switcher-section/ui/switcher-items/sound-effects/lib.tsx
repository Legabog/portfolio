import { useTranslations } from 'next-intl';

import { SoundEffectOnIcon, SoundEffectOffIcon } from '@shared/ui';
import { useSoundEffectsStore } from './model';

export const useLogic = () => {
  const { toggle, isMuted } = useSoundEffectsStore();
  const t = useTranslations('Header.sound-effects');

  const tooltip = t(`tooltip-turn-${!isMuted ? 'on' : 'off'}`);
  const conditionIcon = !isMuted ? <SoundEffectOnIcon /> : <SoundEffectOffIcon />;

  const handleChange = () => toggle();

  return { handleChange, tooltip, conditionIcon };
};
