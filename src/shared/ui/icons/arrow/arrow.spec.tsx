import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { ArrowIcon } from './arrow';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <ArrowIcon />
  </CombineMocks>
);

describe('ArrowIcon Component', () => {
  test('Test ArrowIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test ArrowIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);

    const svgElement = getByTestId('arrow-icon-svg');
    expect(svgElement).toHaveAttribute('height', '24');
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 24 24');
  });

  test('Test ArrowIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const pathElement = getByTestId('arrow-icon-path');
    expect(pathElement.getAttribute('d')).toContain(
      'M11.4893 3.10496L4.29687 9.46964L4.95957 10.2185L11.3208 4.58936L11.3208 21.2959L12.3208 21.2959L12.3208 4.58766L18.6848 10.2039L19.3465 9.45408L12.1515 3.10451C11.9623 2.93752 11.6783 2.93772 11.4893 3.10496Z',
    );
  });
});
