type SectionIds = 'second-section' | 'third-section' | 'fourth-section' | 'fifth-section';

export interface Props {
  activeSectionId: SectionIds;
  id: string;
  sectionId: SectionIds;
}
