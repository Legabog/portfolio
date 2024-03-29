import { FC } from 'react';

import { Props } from './types';

jest.mock('../../src/locales.ts', () => ({
  useRouter: jest.fn(),
  usePathname: () => '',
}));

export const RouterMock: FC<Props> = ({ children }) => children;
