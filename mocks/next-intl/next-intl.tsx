import { FC } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'styled-components';

import { THEME } from '@shared/constants';
import messages from '@messages/en.json';
import { Props } from './types';

export const NextIntlMock: FC<Props> = ({ children }) => (
	<NextIntlClientProvider locale='en' messages={ messages }>
		<ThemeProvider theme={ THEME.light }>{children}</ThemeProvider>
	</NextIntlClientProvider>
);
