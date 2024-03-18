import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { AboutIcon } from './about';

const IconWithMocks: FC = () => (
	<CombineMocks>
		<AboutIcon />
	</CombineMocks>
);

describe('AboutIcon Component', () => {
	test('Test AboutIcon renders without errors', () => {
		expect(() => render(<IconWithMocks />)).not.toThrow();
	});

	test('Test AboutIcon renders correct svg attributes', () => {
		const { getByTestId } = render(<IconWithMocks />);

		const svgElement = getByTestId('about-icon-svg');
		expect(svgElement).toHaveAttribute('height', '24');
		expect(svgElement).toHaveAttribute('width', '24');
		expect(svgElement).toHaveAttribute('viewBox', '0 0 60 60');
	});

	test('Test AboutIcon renders correct path attributes', () => {
		const { getByTestId } = render(<IconWithMocks />);
		const pathElement = getByTestId('about-icon-path');
		expect(pathElement.getAttribute('d')).toContain(
			'M30.01 7.50629C18.965 7.50629 10.01 16.4611 10.01 27.5059C10.01 47.5056 30.01 55.0054 30.01 55.0054C30.01 55.0054 50.01 47.5056 50.01 27.5059C50.01 16.4611 41.055 7.50629 30.01 7.50629ZM27.355 37.2858C13.845 37.2858 15.075 25.006 15.075 25.006C29.81 25.006 27.355 37.2858 27.355 37.2858ZM32.6625 37.2858C32.6625 37.2858 30.2075 25.006 44.9425 25.006C44.945 25.006 46.1725 37.2858 32.6625 37.2858Z',
		);
	});
});
