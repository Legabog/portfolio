import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { MusicOffIcon } from './music-off';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <MusicOffIcon />
  </CombineMocks>
);

describe('MusicOffIcon Component', () => {
  test('Test MusicOffIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test MusicOffIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);

    const svgElement = getByTestId('music-off-icon-svg');
    expect(svgElement).toHaveAttribute('height', '16');
    expect(svgElement).toHaveAttribute('width', '16');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 60 60');
  });

  test('Test MusicOffIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const firstPathElement = getByTestId('music-off-icon-path-1');
    const secondPathElement = getByTestId('music-off-icon-path-2');
    expect(firstPathElement.getAttribute('d')).toContain(
      'M50.6738 8.17685L8.17383 50.6761L11.7088 54.211L24.1263 41.7937L33.1738 51.7111C33.8888 52.4285 34.9638 52.641 35.8988 52.251C36.8338 51.8661 37.4413 50.9536 37.4413 49.9436V28.479L54.2088 11.7093L50.6738 8.17685Z',
    );
    expect(secondPathElement.getAttribute('d')).toContain(
      'M37.4413 14.3383V9.94592C37.4413 8.93594 36.8338 8.02096 35.8988 7.63597C34.9638 7.24847 33.8888 7.46097 33.1738 8.17846L22.4413 19.9457H14.9413C13.5663 19.9457 12.4413 21.0707 12.4413 22.4457V37.4454C12.4413 37.9729 12.6463 38.4429 12.9313 38.8479L37.4413 14.3383Z',
    );
  });
});
