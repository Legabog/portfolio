import { Props } from './ui';

export const SECTIONS: Pick<Props, 'id' | 'title' | 'overlappingType'>[] = [
  {
    id: 'navigation-section-item-1',
    title: 'Linkify',
    overlappingType: 'linkify',
  },
  {
    id: 'navigation-section-item-2',
    title: 'MusicOn',
    overlappingType: 'musicon',
  },
  {
    id: 'navigation-section-item-3',
    title: 'VTB',
    overlappingType: 'vtb',
  },
];
