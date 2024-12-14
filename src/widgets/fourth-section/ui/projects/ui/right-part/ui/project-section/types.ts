import { MutableRefObject, ReactElement } from 'react';

export interface Props {
  icon: ReactElement;
  id: string;
  overlappingType: 'vtb' | 'musicon' | 'linkify';
  sectionRef: MutableRefObject<HTMLDivElement | null>;
  technologyIcons: { icon: ReactElement; id: string; title: string }[];
  topNumber: string;
}
