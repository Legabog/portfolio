import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { State } from './types';

export const useMobileMenuStore = create<State>()(
  devtools(
    immer((set, get) => ({
      state: 0,
      toggleState: () => {
        const currentState = get().state;
        set({ state: currentState === 0 ? 1 : currentState === 1 ? 2 : 1 });
      },
    })),
  ),
);
