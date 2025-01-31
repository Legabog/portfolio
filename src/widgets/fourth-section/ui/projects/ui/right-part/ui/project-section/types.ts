import { MutableRefObject, ReactElement } from 'react';

export interface Props {
  backTechnologyIcons: { icon: ReactElement; id: string; title: string }[];
  frontTechnologyIcons: { icon: ReactElement; id: string; title: string }[];
  icon: ReactElement;
  id: string;
  overlappingType: FourthSection.OverlappingType;
  secondaryTitleNumber: string;
  sectionRef: MutableRefObject<HTMLDivElement | null>;
  topNumber: string;
}
