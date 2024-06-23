import { FC } from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { getMessages, getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import { Loader } from '@shared/ui';
import type { Locale } from '@locales';
import { RootLocaleLayoutProps } from './types';

const Header = dynamic(() => import('@widgets/header'), { loading: () => <Loader /> });
const BottomPanel = dynamic(() => import('@widgets/bottom-panel'), { loading: () => <Loader /> });

const inter = Figtree({ subsets: ['latin'] });

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
