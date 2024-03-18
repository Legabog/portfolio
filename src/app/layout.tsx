'use client';

import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { THEME } from '@shared/constants';
import { RootProps } from './types';
import { GlobalStyles } from './global.styled';
import { useThemeStore } from './model';

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
