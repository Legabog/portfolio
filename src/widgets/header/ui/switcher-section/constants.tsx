import { SwitcherItem, MusicSwitcherItem, Props } from './ui';

export const SWITCHER_ITEMS: Props[] = [
  {
    id: '1',
    text: 'ru',
  },
  {
    id: '2',
    text: 'en',
  },
];
export const NAV_MAP = {
  switcherItems: {
    id: 'switcher-items',
    element: SWITCHER_ITEMS.map((props) => <SwitcherItem key={ props.id } { ...props } />),
  },
  musicSwitcherItems: {
    id: 'music-switcher-item',
    element: <MusicSwitcherItem />,
  },
};
