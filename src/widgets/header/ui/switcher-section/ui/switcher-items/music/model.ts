import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { State } from './types';

export const useMusicStore = create<State>()(
  devtools(
    immer((set, get) => ({
      isMusicOn: false,
      currentTime: 0,
      toggleMusic: () => set({ isMusicOn: !get().isMusicOn }),
      setTime: (time: any) => set({ currentTime: time }),
    })),
  ),
);
