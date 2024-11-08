'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { MusicOffIcon, MusicOnIcon } from '@shared/ui';
import { useSoundEffectsStore } from '@widgets/header';
import { Wrapper, A } from './music.styled';
import { useMusicStore } from './model';

export const Music: FC = () => {
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

  return (
    <Wrapper data-testid='music' onClick={ handleChange }>
      <A title={ tooltip }>{conditionIcon}</A>
    </Wrapper>
  );
};
