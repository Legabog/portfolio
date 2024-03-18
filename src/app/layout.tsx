'use client';

import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@app/global.styled';
import { RootProps } from '@app/types';

import { useThemeStore } from '@app/model';
import { THEME } from '@shared/constants';

const RootLayout: FC<RootProps> = ({ children }) => {
	const { themeType } = useThemeStore();
	return (
		<ThemeProvider theme={ THEME[themeType] }>
			{children}
			<GlobalStyle />
		</ThemeProvider>
	);
};
export default RootLayout;
