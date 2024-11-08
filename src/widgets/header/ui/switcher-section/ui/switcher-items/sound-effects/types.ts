export interface SoundEffectsState {
  audio: HTMLAudioElement;
  isMuted: boolean;
  play: (src: string, ignoreMute?: boolean) => void;
  toggle: () => void;
}
