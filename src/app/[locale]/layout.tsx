import { FC } from 'react';
import { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { getMessages, getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

import type { Locale } from '@locales';
import { RootLocaleLayoutProps } from './types';

const inter = Figtree({ subsets: ['latin'] });

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata & { appleTouchIcon?: string }> {
  const t = await getTranslations({ locale, namespace: 'RootLocaleLayout' });

  return {
    title: t('title'),
    description: t('description'),
    manifest: 'manifest.json',
    appleTouchIcon: 'icons/apple-touch-icon.png',
    appleWebApp: {
      capable: true,
      title: t('title'),
      statusBarStyle: 'black-translucent',
    },
  };
}

const RootLocaleLayout: FC<RootLocaleLayoutProps> = async ({ children, params: { locale } }) => {
  const messages = await getMessages();
  return (
    <html lang={ locale }>
      <body className={ inter.className }>
        <NextIntlClientProvider messages={ messages }>
          {children}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
export default RootLocaleLayout;
