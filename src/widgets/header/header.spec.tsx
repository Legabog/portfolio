import { FC } from 'react';
import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { Header } from './header';

const ComponentWithMocks: FC = () => (
	<CombineMocks>
		<Header />
	</CombineMocks>
);

describe('Header Component Tests', () => {
	test('The `Header` component should render without crashing', () => {
		render(<ComponentWithMocks />);
		const headerElement = screen.getByTestId('header');
		expect(headerElement).toBeInTheDocument();
	});
});
