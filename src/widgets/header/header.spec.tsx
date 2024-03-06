import { render } from '@testing-library/react';

import { Header } from './header';

describe('Header', () => {
	it('renders the header text', () => {
		const { getByText } = render(<Header />);
		expect(getByText('Header')).toBeInTheDocument();
	});
});
