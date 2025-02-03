import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { CommonScrollSectionState } from './types';

export const useCommonScrollStore = create<CommonScrollSectionState>()(
  devtools(
    immer((set) => ({
      isVisible: true,
      setIsVisible: (isVisible: boolean) => {
        set({ isVisible });
      },
    })),
  ),
);
