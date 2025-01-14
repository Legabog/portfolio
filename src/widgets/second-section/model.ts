import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { SecondSectionState } from './types';

export const useSecondSectionStore = create<SecondSectionState>()(
  devtools(
    immer((set, get) => ({
      isVisible: false,
      setIsVisible: (isVisible: boolean) => {
        if (!get().isVisible) set({ isVisible });
      },
    })),
  ),
);
