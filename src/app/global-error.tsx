'use client';

import { useEffect, FC } from 'react';
import * as Sentry from '@sentry/nextjs';
import Error from 'next/error';

import { Props } from './types';

const GlobalError: FC<Props> = ({ error, params: { locale } }) => {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang={ locale }>
      <body>
        <Error { ...error } />
      </body>
    </html>
  );
};
export default GlobalError;
