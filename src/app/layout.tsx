'use client';

import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { THEME } from '@shared/constants';
import { useThemeStore } from '@widgets/header';
import { RootProps } from './types';
import { GlobalStyles } from './global.styled';

const RootLayout: FC<RootProps> = ({ children }) => {
  const { themeType } = useThemeStore();
  return (
    <ThemeProvider theme={ THEME[themeType] }>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};
export default RootLayout;
