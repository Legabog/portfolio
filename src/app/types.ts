import { ReactNode } from 'react';
import { ErrorProps } from 'next/error';

export interface Props {
  error: ErrorProps;
  params: { locale: string };
}
export interface RootProps {
  children: ReactNode;
}
export interface State {
  setTheme: () => void;
  themeType: 'light' | 'dark';
}
