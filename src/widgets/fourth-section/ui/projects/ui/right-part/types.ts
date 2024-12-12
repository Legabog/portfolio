import { MutableRefObject } from 'react';

export interface Props {
  linkifyRef: MutableRefObject<HTMLDivElement | null>;
  musiconRef: MutableRefObject<HTMLDivElement | null>;
  vtbRef: MutableRefObject<HTMLDivElement | null>;
}
