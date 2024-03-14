import React from 'react';
import type { Preview } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import en from '../messages/en.json';
import ru from '../messages/ru.json';

const getLanguage = (locale: string) => {
	switch (locale) {
		case 'en':
			return en;
		case 'ru':
			return ru;
		default:
			return en;
	}
};
const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	globalTypes: {
		locale: {
			description: 'Language for components',
			defaultValue: 'en',
			toolbar: {
				title: 'Language',
				icon: 'globe',
				items: ['en', 'ru'],
				dynamicTitle: true,
			},
		},
	},
	decorators: [
		(Story, context) => (
			<NextIntlClientProvider
				locale={context.globals.locale}
				messages={getLanguage(context.globals.locale)}
			>
				<Story />
			</NextIntlClientProvider>
		),
	],
};
export default preview;
