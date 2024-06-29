import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { ChevronDownIcon } from './chevron-down';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <ChevronDownIcon />
  </CombineMocks>
);

describe('ChevronDownIcon Component', () => {
  test('Test ChevronDownIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test ChevronDownIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);

    const svgElement = getByTestId('chevron-down-icon-svg');
    expect(svgElement).toHaveAttribute('height', '10');
    expect(svgElement).toHaveAttribute('width', '16');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 16 10');
  });

  test('Test ChevronDownIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const pathElement = getByTestId('chevron-down-icon-path');

    expect(pathElement.getAttribute('d')).toContain(
      'M8 9.48828C8.30762 9.47949 8.58887 9.36523 8.81738 9.11914L15.4971 2.28125C15.6904 2.08789 15.7959 1.8418 15.7959 1.55176C15.7959 0.97168 15.3389 0.505859 14.7588 0.505859C14.4775 0.505859 14.2051 0.620117 14.0029 0.822266L8.00879 6.9834L1.99707 0.822266C1.79492 0.628906 1.53125 0.505859 1.24121 0.505859C0.661133 0.505859 0.204102 0.97168 0.204102 1.55176C0.204102 1.8418 0.30957 2.08789 0.50293 2.28125L7.19141 9.11914C7.42871 9.36523 7.69238 9.48828 8 9.48828Z',
    );
  });
});
