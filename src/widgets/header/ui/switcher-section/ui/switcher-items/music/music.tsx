'use client';

import { FC, useEffect } from 'react';
import { useTranslations } from 'next-intl';

import { MusicOffIcon, MusicOnIcon } from '@shared/ui';
import { Wrapper, A } from './music.styled';
import { useMusicStore } from './model';
import { Props } from './types';

export const Music: FC<Props> = ({ audioRef }) => {
  const { isMusicOn, toggleMusic, setCurrentTime, currentTime } = useMusicStore();
  const t = useTranslations('Header.music');
  const tooltip = t(`tooltip-turn-${isMusicOn ? 'on' : 'off'}`);
  const conditionIcon = isMusicOn ? <MusicOnIcon /> : <MusicOffIcon />;

  let audio;
  if (typeof document !== 'undefined') audio = document.getElementById('audio') as HTMLAudioElement;

  const handleChange = () => toggleMusic();
  const handleTimeUpdate = () => setCurrentTime(audio?.currentTime);
  const handleOnLoadedMetadata = () => {
    (audioRef.current as HTMLAudioElement).currentTime = currentTime;
  };

  useEffect(() => {
    if (audioRef.current) audioRef.current[!isMusicOn ? 'pause' : 'play']();
  }, [isMusicOn, audioRef]);

  return (
    <Wrapper data-testid='music-switcher-item' onClick={ handleChange }>
      <A $isActvie={ isMusicOn } data-testid='music-switcher-item-tooltip' title={ tooltip }>
        {conditionIcon}
      </A>
      <audio
        ref={ audioRef }
        id='audio'
        preload='auto'
        loop
        onLoadedMetadata={ handleOnLoadedMetadata }
        onTimeUpdate={ handleTimeUpdate }
      >
        <source src='cosmos.mp3' type='audio/mpeg' />
        <track kind='captions' />
      </audio>
    </Wrapper>
  );
};
