import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { ThreeIcon } from './three';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <ThreeIcon />
  </CombineMocks>
);

describe('ThreeIcon Component', () => {
  test('Test ThreeIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test ThreeIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);

    const svgElement = getByTestId('three-icon-svg');
    expect(svgElement).toHaveAttribute('height', '48');
    expect(svgElement).toHaveAttribute('width', '48');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 226.77 226.77');
  });

  test('Test ThreeIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const firstPathElement = getByTestId('three-icon-path-1');
    const secondPathElement = getByTestId('three-icon-path-2');
    const thirdPathElement = getByTestId('three-icon-path-3');
    const fourthPathElement = getByTestId('three-icon-path-4');
    const fifthPathElement = getByTestId('three-icon-path-5');
    const sixthPathElement = getByTestId('three-icon-path-6');

    expect(firstPathElement.getAttribute('d')).toContain(
      'm63.02 200.61-43.213-174.94 173.23 49.874z',
    );
    expect(secondPathElement.getAttribute('d')).toContain(
      'm106.39 50.612 21.591 87.496-86.567-24.945z',
    );
    expect(thirdPathElement.getAttribute('d')).toContain(
      'm84.91 125.03-10.724-43.465 43.008 12.346z',
    );
    expect(fourthPathElement.getAttribute('d')).toContain(
      'm63.458 38.153 10.724 43.465-43.008-12.346z',
    );
    expect(fifthPathElement.getAttribute('d')).toContain(
      'm149.47 62.93 10.724 43.465-43.008-12.346z',
    );
    expect(sixthPathElement.getAttribute('d')).toContain(
      'm84.915 125.06 10.724 43.465-43.008-12.346z',
    );
  });
});
