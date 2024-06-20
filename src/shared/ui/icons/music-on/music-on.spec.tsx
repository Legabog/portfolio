import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { MusicOnIcon } from './music-on';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <MusicOnIcon />
  </CombineMocks>
);

describe('MusicOnIcon Component', () => {
  test('Test MusicOnIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test MusicOnIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);

    const svgElement = getByTestId('music-on-icon-svg');
    expect(svgElement).toHaveAttribute('height', '14');
    expect(svgElement).toHaveAttribute('width', '14');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 38 46');
  });

  test('Test MusicOnIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const firstPathElement = getByTestId('music-on-icon-path');
    expect(firstPathElement.getAttribute('d')).toContain(
      'M20.7384 1.26738C21.4534 0.549999 22.5284 0.336791 23.4634 0.723074C24.3984 1.10685 25.0059 2.02741 25.0059 3.03827V43.1715C25.0059 44.1874 24.3984 45.1029 23.4634 45.4917C22.5284 45.8805 21.4534 45.6648 20.7384 44.9474L10.0059 33.1382H2.50586C1.13086 33.1382 0.00585938 32.0094 0.00585938 30.6298V15.5799C0.00585938 14.2029 1.13086 13.0716 2.50586 13.0716H10.0059L20.7384 1.26738ZM30.0059 15.5797C34.1409 15.5797 37.5059 18.9586 37.5059 23.1048C37.5059 27.2561 34.1409 30.6298 30.0059 30.6298V25.6132C31.3834 25.6132 32.5059 24.4869 32.5059 23.1048C32.5059 21.7227 31.3834 20.5965 30.0059 20.5965V15.5797Z',
    );
  });
});
