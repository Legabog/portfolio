import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { ResumeIcon } from './resume';

const IconWithMocks: FC = () => (
	<CombineMocks>
		<ResumeIcon />
	</CombineMocks>
);

describe('ResumeIcon Component', () => {
	test('Test ResumeIcon renders without errors', () => {
		expect(() => render(<IconWithMocks />)).not.toThrow();
	});

	test('Test ResumeIcon renders correct svg attributes', () => {
		const { getByTestId } = render(<IconWithMocks />);

		const svgElement = getByTestId('resume-icon-svg');
		expect(svgElement).toHaveAttribute('height', '18');
		expect(svgElement).toHaveAttribute('width', '18');
		expect(svgElement).toHaveAttribute('viewBox', '0 0 40 50');
	});

	test('Test ResumeIcon renders correct path attributes', () => {
		const { getByTestId } = render(<IconWithMocks />);
		const pathElement = getByTestId('resume-icon-path');
		expect(pathElement.getAttribute('d')).toContain(
			'M28.5355 -0.00115967H5.00049C2.24299 -0.00115967 0.000488281 2.2438 0.000488281 4.99875V44.998C0.000488281 47.7555 2.24299 49.9979 5.00049 49.9979H35.0005C37.758 49.9979 40.0005 47.7555 40.0005 44.998V11.4636L28.5355 -0.00115967ZM7.50049 24.9984H27.5005V29.9983H7.50049V24.9984ZM32.5005 39.9981H7.50049V34.9982H32.5005V39.9981ZM25.0005 14.9986V2.4988L37.5005 14.9986H25.0005Z',
		);
	});
});
