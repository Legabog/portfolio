import { MutableRefObject } from 'react';

export interface Props {
  activeOverlappingType: FourthSection.OverlappingType;
  id: string;
  kodRef: MutableRefObject<HTMLDivElement | null>;
  overlappingType: FourthSection.OverlappingType;
  poolingRef: MutableRefObject<HTMLDivElement | null>;
  title: string;
  linkifyRef?: MutableRefObject<HTMLDivElement | null>;
  musiconRef?: MutableRefObject<HTMLDivElement | null>;
}
