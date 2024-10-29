import { RefObject } from 'react';

export interface State {
  currentTime: number;
  isMusicOn: boolean;
  setCurrentTime: (currentTime: number) => void;
  toggleMusic: () => void;
}
export interface Props {
  audioRef: RefObject<HTMLAudioElement>;
}
