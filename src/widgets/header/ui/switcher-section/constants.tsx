import { Language, Music, Theme, Props } from './ui';

export const SWITCHER_ITEMS: Props[] = [
  {
    id: '1',
    text: 'en',
  },
  {
    id: '2',
    text: 'ru',
  },
];
export const NAV_MAP = {
  languageSwitcherItems: {
    id: 'language-switcher-items',
    element: SWITCHER_ITEMS.map((props) => <Language key={ props.id } { ...props } />),
  },
  themeSwitcherItem: {
    id: 'theme-switcher-item',
    element: <Theme />,
  },
  musicSwitcherItem: {
    id: 'music-switcher-item',
    element: <Music />,
  },
};
