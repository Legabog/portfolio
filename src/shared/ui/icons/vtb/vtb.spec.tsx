import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { VTBIcon } from './vtb';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <VTBIcon />
  </CombineMocks>
);

describe('VTBIcon Component', () => {
  test('Test VTBIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test VTBIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const svgElement = getByTestId('vtb-icon-svg');
    expect(svgElement).toHaveAttribute('height', '24');
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 1575 970');
  });

  test('Test VTBIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const pathElement = getByTestId('vtb-icon-path');
    expect(pathElement.getAttribute('d')).toContain(
      'm1222 969.3h-1222l82.6-242.3h1221.9zm132.2-363.5h-1222l88-242.3h1216.5zm132.1-363.5h-1222l88.1-242.4h1222z',
    );
  });
});
