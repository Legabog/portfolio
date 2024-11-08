export interface MusicState {
  audio: HTMLAudioElement;
  isPlaying: boolean;
  play: () => void;
  stop: () => void;
}
