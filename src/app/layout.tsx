'use client';

import { FC } from 'react';
import { GlobalStyle } from '@app/global.styled';
import { RootProps } from '@app/types';

const RootLayout: FC<RootProps> = ({ children }) => (
	<>
		{children}
		<GlobalStyle />
	</>
);
export default RootLayout;
