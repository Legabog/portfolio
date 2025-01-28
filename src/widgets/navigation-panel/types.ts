export type SectionIds = 'second-section' | 'third-section' | 'fourth-section' | 'fifth-section';

export interface NavigationPanelState {
  activeSectionId: SectionIds;
  isInitialized: boolean;
  isVisible: boolean;
  setActiveSectionId: (activeSectionId: SectionIds) => void;
  setIsInitialized: (isInitialized: boolean) => void;
  setIsVisible: (isVisible: boolean) => void;
}
