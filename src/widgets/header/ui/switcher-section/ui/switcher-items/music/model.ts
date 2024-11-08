import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { MusicState } from './types';

export const useMusicStore = create<MusicState>()(
  devtools(
    immer((set) => {
      let audio;
      if (typeof window !== 'undefined') {
        audio = new Audio('music/cosmos.mp3');
        audio.loop = true;
      }

      return {
        audio,
        isPlaying: false,
        play: () =>
          set(({ audio }) => {
            if (audio) {
              audio.play();
              return { isPlaying: true };
            }
          }),
        stop: () =>
          set(({ audio }) => {
            if (audio) {
              audio.pause();
              audio.currentTime = 0;
              return { isPlaying: false };
            }
          }),
      };
    }),
  ),
);
