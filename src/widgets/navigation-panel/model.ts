import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { NavigationPanelState, SectionIds } from './types';

export const useNavigationPanelStore = create<NavigationPanelState>()(
  devtools(
    immer((set) => ({
      isVisible: false,
      isInitialized: false,
      activeSectionId: 'second-section',
      setActiveSectionId: (activeSectionId: SectionIds) => {
        set({ activeSectionId });
      },
      setIsVisible: (isVisible: boolean) => {
        set({ isVisible });
      },
      setIsInitialized: (isInitialized: boolean) => {
        set({ isInitialized });
      },
    })),
  ),
);
