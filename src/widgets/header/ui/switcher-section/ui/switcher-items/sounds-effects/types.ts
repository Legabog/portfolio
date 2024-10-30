export interface State {
  audio: HTMLAudioElement;
  isMuted: boolean;
  play: (src: string, ignoreMute?: boolean) => void;
  toggle: () => void;
}
