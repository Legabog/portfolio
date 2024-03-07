import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { BottomPanel } from 'widgets';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'cv app',
	description: 'cv app',
};

const RootLayout: FC<{
	children: ReactNode;
}> = ({ children }) => (
	<html lang='en'>
		<body className={ inter.className }>
			<BottomPanel />
			{children}
		</body>
	</html>
);
export default RootLayout;
