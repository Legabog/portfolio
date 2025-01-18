import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { FirstSectionState } from './types';

export const useFirstSectionStore = create<FirstSectionState>()(
  devtools(
    immer((set, get) => ({
      isVisible: false,
      setIsVisible: (isVisible: boolean) => {
        if (!get().isVisible) set({ isVisible });
      },
    })),
  ),
);