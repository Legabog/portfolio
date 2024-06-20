'use client';

import { FC, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { MusicOffIcon, MusicOnIcon } from '@shared/ui';
import { Wrapper, A, Tooltip } from './music.styled';
import { useMusicStore } from './model';

export const Music: FC = () => {
  const { isMusicOn, toggleMusic, setTime, currentTime } = useMusicStore();
  const [mouseIn, setMouseIn] = useState<number>(0);
  const t = useTranslations('Header.music');
  const tooltip = t(`tooltip-turn-${isMusicOn ? 'on' : 'off'}`);
  const conditionIcon = isMusicOn ? <MusicOnIcon /> : <MusicOffIcon />;

  let audio;
  if (typeof document !== 'undefined') audio = document.getElementById('audio') as HTMLAudioElement;

  const handleChange = () => {
    toggleMusic();
    if (!isMusicOn) audio.currentTime = 0;
    audio[isMusicOn ? 'pause' : 'play']();
  };

  useEffect(() => {
    if (audio && audio.currentTime) {
      const interval = setInterval(() => setTime(audio.currentTime), 100);
      return () => clearInterval(interval);
    }
  }, [audio, setTime, audio?.currentTime, currentTime]);
  useEffect(() => {
    if (currentTime && audio && isMusicOn && !audio.currentTime) {
      audio.pause();
      audio.currentTime = currentTime;
      audio.play();
    }
  }, [currentTime, audio, audio?.currentTime, isMusicOn]);
  useEffect(() => {
    if (audio) {
      const replayAudio = () => {
        audio.currentTime = 0;
        audio.play();
      };
      audio.addEventListener('ended', replayAudio);

      return () => audio.removeEventListener('ended', replayAudio);
    }
  }, [audio]);

  return (
    <Wrapper
      data-testid='music-switcher-item'
      onClick={ handleChange }
      onMouseEnter={ () => setMouseIn(1) }
      onMouseLeave={ () => setMouseIn(2) }
    >
      <A $isActvie={ isMusicOn } data-testid='music-switcher-item-tooltip' title={ tooltip }>
        {conditionIcon}
        <audio id='audio'>
          <source src='cosmos.mp3' type='audio/mpeg' />
          <track kind='captions' />
        </audio>
        <Tooltip $mouseIn={ mouseIn }>{tooltip}</Tooltip>
      </A>
    </Wrapper>
  );
};
