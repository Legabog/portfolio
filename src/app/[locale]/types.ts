import { ReactNode } from 'react';

export interface RootLocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}
