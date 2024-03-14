import { FC } from 'react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '@messages/en.json';
import { Props } from './types';

export const NextIntlMock: FC<Props> = ({ children }) => (
	<NextIntlClientProvider locale='en' messages={ messages }>
		{children}
	</NextIntlClientProvider>
);
