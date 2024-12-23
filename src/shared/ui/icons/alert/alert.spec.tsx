import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { AlertIcon } from './alert';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <AlertIcon />
  </CombineMocks>
);

describe('AlertIcon Component', () => {
  test('Test AlertIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test AlertIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);

    const svgElement = getByTestId('alert-icon-svg');
    expect(svgElement).toHaveAttribute('height', '48');
    expect(svgElement).toHaveAttribute('width', '48');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 60 60');
  });

  test('Test AlertIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const firstPathElement = getByTestId('alert-icon-path-1');
    const secondPathElement = getByTestId('alert-icon-path-2');

    expect(firstPathElement.getAttribute('d')).toContain(
      'M36.2543 4.96655H23.7543V36.0068H36.2543V4.96655Z',
    );
    expect(secondPathElement.getAttribute('d')).toContain(
      'M23.7543 48.7507C23.7543 52.0842 26.6709 55.0007 30.0043 55.0007C33.3376 55.0007 36.2543 52.0842 36.2543 48.7507C36.2543 45.4174 33.3376 42.5007 30.0043 42.5007C26.6709 42.5007 23.7543 45.4174 23.7543 48.7507Z',
    );
  });
});
