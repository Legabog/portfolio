import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { MoonIcon } from './moon';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <MoonIcon />
  </CombineMocks>
);

describe('MoonIcon Component', () => {
  test('Test MoonIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test MoonIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);

    const svgElement = getByTestId('moon-icon-svg');
    expect(svgElement).toHaveAttribute('height', '16');
    expect(svgElement).toHaveAttribute('width', '16');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 18 19');
  });

  test('Test MoonIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const pathElement = getByTestId('moon-icon-path');
    expect(pathElement.getAttribute('d')).toContain(
      'M13.834 12.5723C9.18457 12.5723 6.23145 9.68945 6.23145 5.06641C6.23145 4.05566 6.46875 2.71094 6.78516 1.99902C6.89062 1.77051 6.91699 1.6123 6.91699 1.48926C6.91699 1.20801 6.71484 0.935547 6.35449 0.935547C6.22266 0.935547 6.01172 0.970703 5.79199 1.0498C2.52246 2.35938 0.342773 5.81348 0.342773 9.47852C0.342773 14.6377 4.24512 18.3379 9.38672 18.3379C13.1133 18.3379 16.374 16.0879 17.5254 13.1523C17.6221 12.9238 17.6484 12.6953 17.6484 12.5723C17.6484 12.2295 17.3848 12.001 17.1035 12.001C16.9541 12.001 16.8135 12.0361 16.6113 12.124C15.9521 12.3525 14.8887 12.5723 13.834 12.5723Z',
    );
  });
});
