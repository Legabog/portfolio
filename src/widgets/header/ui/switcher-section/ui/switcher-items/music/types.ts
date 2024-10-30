export interface State {
  audio: HTMLAudioElement;
  isPlaying: boolean;
  play: () => void;
  stop: () => void;
}
