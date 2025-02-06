import { MutableRefObject } from 'react';

export interface Props {
  absoluteRef: MutableRefObject<HTMLDivElement | null>;
  linkifyRef: MutableRefObject<HTMLDivElement | null>;
  musiconRef: MutableRefObject<HTMLDivElement | null>;
  overlappingType: FourthSection.OverlappingType;
  vtbRef: MutableRefObject<HTMLDivElement | null>;
}
