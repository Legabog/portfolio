import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { ThirdSectionState } from './types';

export const useThirdSectionStore = create<ThirdSectionState>()(
  devtools(
    immer((set) => ({
      isVisible: false,
      isIgnore: false,
      setIsVisible: (isVisible: boolean) => {
        set({ isVisible });
      },
      setIsIgnore: (isIgnore: boolean) => {
        set({ isIgnore });
      },
    })),
  ),
);
