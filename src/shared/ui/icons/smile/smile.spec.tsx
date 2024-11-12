import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { SmileIcon } from './smile';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <SmileIcon />
  </CombineMocks>
);

describe('SmileIcon Component', () => {
  test('Test SmileIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test SmileIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const svgElement = getByTestId('smile-icon-svg');
    expect(svgElement).toHaveAttribute('height', '24');
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 60 60');
  });

  test('Test SmileIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const pathElement = getByTestId('smile-icon-path');
    expect(pathElement.getAttribute('d')).toContain(
      'M29.9998 5.005C16.1948 5.005 4.99976 16.1973 4.99976 30.0046C4.99976 43.8068 16.1948 55.0041 29.9998 55.0041C43.8047 55.0041 54.9997 43.8068 54.9997 30.0046C54.9997 16.1973 43.8047 5.005 29.9998 5.005ZM34.9998 15.0048H39.9997V25.0046H34.9998V15.0048ZM19.9998 15.0048H24.9998V25.0046H19.9998V15.0048ZM44.9997 35.0045C44.9997 41.5468 37.8498 47.5042 29.9998 47.5042C22.1498 47.5042 14.9998 41.5468 14.9998 35.0045V32.5045H44.9997V35.0045Z',
    );
  });
});
