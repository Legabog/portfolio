import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { THEME } from '@shared/constants';
import { Props } from './types';

export const ThemeMock: FC<Props> = ({ children }) => (
  <ThemeProvider theme={ THEME.light }>{children}</ThemeProvider>
);
