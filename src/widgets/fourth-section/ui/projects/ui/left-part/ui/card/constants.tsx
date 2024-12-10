import { Props } from '../../types';
import { Props as CaruselProps } from './ui';

export const WORDS: {
  [key in Props['overlappingType']]: {
    [key in CaruselProps['caruselType']]: CaruselProps['words'];
  };
} = {
  vtb: {
    left: [
      { id: 'vtb-left-1', text: 'VTB' },
      { id: 'vtb-left-2', text: 'Cash' },
      { id: 'vtb-left-3', text: 'Managment' },
      { id: 'vtb-left-4', text: 'Projects' },
    ],
    right: [
      { id: 'vtb-right-1', text: 'Cash' },
      { id: 'vtb-right-2', text: 'Managment' },
      { id: 'vtb-right-3', text: 'Projects' },
      { id: 'vtb-right-4', text: 'VTB' },
    ],
  },
  musicon: {
    left: [
      { id: 'musicon-left-1', text: 'MusicOn' },
      { id: 'musicon-left-2', text: 'Projects' },
      { id: 'musicon-left-3', text: 'Music' },
      { id: 'musicon-left-4', text: 'Energy' },
    ],
    right: [
      { id: 'musicon-right-1', text: 'Energy' },
      { id: 'musicon-right-2', text: 'Music' },
      { id: 'musicon-right-3', text: 'Projects' },
      { id: 'musicon-right-4', text: 'MusicOn' },
    ],
  },
  linkify: {
    left: [
      { id: 'linkify-left-1', text: 'Linkify' },
      { id: 'linkify-left-2', text: 'Projects' },
      { id: 'linkify-left-3', text: 'Social' },
      { id: 'linkify-left-4', text: 'Network' },
    ],
    right: [
      { id: 'linkify-right-1', text: 'Social' },
      { id: 'linkify-right-2', text: 'Network' },
      { id: 'linkify-right-3', text: 'Projects' },
      { id: 'linkify-right-4', text: 'Linkify' },
    ],
  },
};
