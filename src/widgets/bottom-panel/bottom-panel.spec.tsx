import { render, screen } from '@testing-library/react';

import { NextIntlMock } from '@mocks';
import { BOTTOM_PANEL_ITEMS } from './constants';
import { BottomPanel } from './bottom-panel';

describe('BottomPanel Component Tests', () => {
	test('The `BottomPanel` component should render without crashing', () => {
		render(
			<NextIntlMock>
				<BottomPanel />
			</NextIntlMock>,
		);
		const navElement = screen.getByRole('navigation');
		expect(navElement).toBeInTheDocument();
	});

	test('The `BottomPanel` component should render the correct number of `Item` components based on the `BOTTOM_PANEL_ITEMS` array', () => {
		render(
			<NextIntlMock>
				<BottomPanel />
			</NextIntlMock>,
		);
		const itemElements = screen.getAllByTestId('item');
		expect(itemElements.length).toBe(BOTTOM_PANEL_ITEMS.length);
	});
});
