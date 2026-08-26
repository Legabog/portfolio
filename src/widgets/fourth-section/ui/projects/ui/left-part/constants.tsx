import { ReactElement } from 'react';

import { MusicOnProjectIcon, LinkifyIcon, VTBIcon } from '@shared/ui';
import { Props } from './types';

export const PROJECTS_SVG: { [key in Props['overlappingType']]: ReactElement } = {
  pooling: <VTBIcon />,
  musicon: <MusicOnProjectIcon />,
  linkify: <LinkifyIcon />,
  kod: <VTBIcon />,
};
