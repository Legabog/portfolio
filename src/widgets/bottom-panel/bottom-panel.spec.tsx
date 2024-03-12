import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import { BOTTOM_PANEL_ITEMS } from './constants';
import { BottomPanel } from './bottom-panel';

describe('BottomPanel Component Tests', () => {
	const locale = 'en';
	const messages = { BottomPanel: {} };
	import('../../../locales/en.json').then((module) => {
		messages.BottomPanel = module.BottomPanel;
	});

	test('The `BottomPanel` component should render without crashing', () => {
		render(
			<NextIntlClientProvider locale={ locale } messages={ messages }>
				<BottomPanel />
			</NextIntlClientProvider>,
		);
		const navElement = screen.getByRole('navigation');
		expect(navElement).toBeInTheDocument();
	});

	test('The `BottomPanel` component should render the correct number of `Item` components based on the `BOTTOM_PANEL_ITEMS` array', () => {
		render(
			<NextIntlClientProvider locale={ locale } messages={ messages }>
				<BottomPanel />
			</NextIntlClientProvider>,
		);
		const itemElements = screen.getAllByTestId('item');
		expect(itemElements.length).toBe(BOTTOM_PANEL_ITEMS.length);
	});
});
