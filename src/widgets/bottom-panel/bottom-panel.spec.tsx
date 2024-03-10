import { render, screen } from '@testing-library/react';

import { BOTTOM_PANEL_ITEMS } from './constants';
import { BottomPanel } from './bottom-panel';

describe('BottomPanel Component Tests', () => {
	test('The `BottomPanel` component should render without crashing', () => {
		render(<BottomPanel />);
		const navElement = screen.getByRole('navigation');
		expect(navElement).toBeInTheDocument();
	});

	test('The `BottomPanel` component should render the correct number of `Item` components based on the `BOTTOM_PANEL_ITEMS` array', () => {
		render(<BottomPanel />);
		const itemElements = screen.getAllByTestId('item');
		expect(itemElements.length).toBe(BOTTOM_PANEL_ITEMS.length);
	});
});
