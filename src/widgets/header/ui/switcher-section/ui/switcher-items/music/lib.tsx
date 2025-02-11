import { useTranslations } from 'next-intl';

import { MusicOffIcon, MusicOnIcon } from '@shared/ui';
import { useSoundEffectsStore } from '@widgets/header';
import { useMusicStore } from './model';

export const useLogic = () => {
  const { isPlaying, play, stop } = useMusicStore();
  const { play: playSound } = useSoundEffectsStore();
  const t = useTranslations('Header.music');

  const tooltip = t(`tooltip-turn-${isPlaying ? 'on' : 'off'}`);
  const conditionIcon = isPlaying ? <MusicOnIcon /> : <MusicOffIcon />;

  const handleChange = () => {
    playSound('click-1.wav');
    if (isPlaying) stop();
    else play();
  };

  return { handleChange, tooltip, conditionIcon };
};
