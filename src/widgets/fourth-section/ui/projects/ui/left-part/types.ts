import { MutableRefObject } from 'react';

export interface Props {
  absoluteRef: MutableRefObject<HTMLDivElement | null>;
  overlappingType: 'vtb' | 'musicon' | 'linkify';
}
