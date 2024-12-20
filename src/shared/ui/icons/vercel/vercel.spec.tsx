import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { VercelIcon } from './vercel';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <VercelIcon />
  </CombineMocks>
);

describe('VercelIcon Component', () => {
  test('Test VercelIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test VercelIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);

    const svgElement = getByTestId('vercel-icon-svg');
    expect(svgElement).toHaveAttribute('height', '48');
    expect(svgElement).toHaveAttribute('width', '48');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 512 512');
  });

  test('Test VercelIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const pathElement = getByTestId('vercel-icon-path');
    expect(pathElement.getAttribute('d')).toContain('M256,48,496,464H16Z');
  });
});
