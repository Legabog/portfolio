import { MutableRefObject } from 'react';

export interface Props {
  activeOverlappingType: FourthSection.OverlappingType;
  id: string;
  overlappingType: FourthSection.OverlappingType;
  title: string;
  linkifyRef?: MutableRefObject<HTMLDivElement | null>;
  musiconRef?: MutableRefObject<HTMLDivElement | null>;
  vtbRef?: MutableRefObject<HTMLDivElement | null>;
}
