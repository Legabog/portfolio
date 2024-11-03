import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { State } from './types';

export const useSoundEffectsStore = create<State>()(
  devtools(
    immer((set, get) => {
      const rootPath = 'sound-effects/';
      let audio;
      if (typeof window !== 'undefined') {
        audio = new Audio();
        audio.volume = true;
      }

      return {
        audio,
        isMuted: false,
        play: (src: string, ignoreMute?: boolean) =>
          set(({ audio, isMuted }) => {
            if (audio && (!isMuted || ignoreMute)) {
              audio.src = `${rootPath}${src}`;
              audio.play();
            }
          }),
        toggle: () =>
          set(({ isMuted }) => {
            if (audio) {
              get().play(`${!isMuted ? 'off' : 'on'}-sound.mp3`, true);
              return { isMuted: !isMuted };
            }
          }),
      };
    }),
  ),
);
