import { MutableRefObject } from 'react';

export interface Props {
  kodRef: MutableRefObject<HTMLDivElement | null>;
  linkifyRef: MutableRefObject<HTMLDivElement | null>;
  musiconRef: MutableRefObject<HTMLDivElement | null>;
  poolingRef: MutableRefObject<HTMLDivElement | null>;
}
