import { ReactElement } from 'react';

export interface Props {
  caruselType: 'left' | 'right';
  technologies: { icon: ReactElement; id: string; title: string }[];
}
