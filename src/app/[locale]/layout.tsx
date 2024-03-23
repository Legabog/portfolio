import { FC } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getMessages, getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import { BottomPanel, Header } from '@widgets';
import type { Locale } from '@locales';
import { RootLocaleLayoutProps } from './types';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({
	params: { locale },
}: {
	params: { locale: Locale };
}): Promise<Metadata> {
	const t = await getTranslations({ locale, namespace: 'RootLocaleLayout' });

	return {
		title: t('title'),
		description: t('description'),
	};
}

const RootLocaleLayout: FC<RootLocaleLayoutProps> = async ({ children, params: { locale } }) => {
	const messages = await getMessages();

	return (
		<html lang={ locale }>
			<body className={ inter.className }>
				<NextIntlClientProvider messages={ messages }>
					<Header />
					{children}
					<BottomPanel />
				</NextIntlClientProvider>
			</body>
		</html>
	);
};
export default RootLocaleLayout;
