import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { NextIntlClientProvider } from 'next-intl';

import en from '../messages/en.json';
import ru from '../messages/ru.json';
import { THEME } from '../src/shared/constants';
import { GlobalStyles } from '../src/app/global.styled';

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
		nextjs: { appDirectory: true },
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
		theme: {
			description: 'Theme for components',
			defaultValue: 'light',
			toolbar: {
				icon: 'circlehollow',
				items: [
					{ value: 'light', icon: 'circlehollow', title: 'light' },
					{ value: 'dark', icon: 'circle', title: 'dark' },
				],
				showName: true,
			},
		},
	},
	decorators: [
		(Story, context) => {
			const { theme, locale } = context.globals;

			return (
				<NextIntlClientProvider locale={locale} messages={getLanguage(locale)}>
					<ThemeProvider theme={THEME[theme]}>
						<Story />
						<GlobalStyles />
					</ThemeProvider>
				</NextIntlClientProvider>
			);
		},
	],
};
export default preview;
