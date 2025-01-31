import { MutableRefObject } from 'react';

export interface Props {
  linkifyRef: MutableRefObject<HTMLDivElement | null>;
  musiconRef: MutableRefObject<HTMLDivElement | null>;
  overlappingType: FourthSection.OverlappingType;
  vtbRef: MutableRefObject<HTMLDivElement | null>;
}
