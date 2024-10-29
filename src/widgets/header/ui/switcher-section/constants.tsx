import { createRef } from 'react';
import { Language, Music, Theme } from './ui';

const ref = createRef<HTMLAudioElement>();

export const NAV_MAP = {
  languageSwitcherItems: {
    id: 'language-switcher-items',
    element: <Language />,
  },
  themeSwitcherItem: {
    id: 'theme-switcher-item',
    element: <Theme />,
  },
  musicSwitcherItem: {
    id: 'music-switcher-item',
    element: <Music audioRef={ ref } />,
  },
};
