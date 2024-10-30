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
    expect(svgElement).toHaveAttribute('height', '16');
    expect(svgElement).toHaveAttribute('width', '16');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 60 60');
  });

  test('Test MusicOnIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const firstPathElement = getByTestId('music-on-icon-path-1');
    const secondPathElement = getByTestId('music-on-icon-path-2');
    const thirdPathElement = getByTestId('music-on-icon-path-3');
    expect(firstPathElement.getAttribute('d')).toContain(
      'M28.4575 7.69964C27.5225 7.31465 26.4475 7.52715 25.7325 8.24213L15 20.0069H7.5C6.125 20.0069 5 21.1344 5 22.5069V37.5066C5 38.8816 6.125 40.0066 7.5 40.0066H15L25.7325 51.7763C26.4475 52.4913 27.5225 52.7063 28.4575 52.3188C29.3925 51.9313 30 51.0189 30 50.0064V10.0071C30 8.99962 29.3925 8.08214 28.4575 7.69964Z',
    );
    expect(secondPathElement.getAttribute('d')).toContain(
      'M35.0001 12.5055V17.5054C41.8926 17.5054 47.5001 23.1153 47.5001 30.0052C47.5001 36.8976 41.8926 42.505 35.0001 42.505V47.5049C44.6501 47.5049 52.5001 39.6575 52.5001 30.0052C52.5001 20.3579 44.6501 12.5055 35.0001 12.5055Z',
    );
    expect(thirdPathElement.getAttribute('d')).toContain(
      'M42.5001 30.0057C42.5001 25.8733 39.1351 22.5058 35.0001 22.5058V27.5057C36.3776 27.5057 37.5001 28.6282 37.5001 30.0057C37.5001 31.3832 36.3776 32.5056 35.0001 32.5056V37.5055C39.1351 37.5055 42.5001 34.1431 42.5001 30.0057Z',
    );
  });
});
