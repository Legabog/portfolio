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
    expect(svgElement).toHaveAttribute('height', '14');
    expect(svgElement).toHaveAttribute('width', '14');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 48 47');
  });

  test('Test MusicOffIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const firstPathElement = getByTestId('music-off-icon-path-1');
    const secondPathElement = getByTestId('music-off-icon-path-2');
    expect(firstPathElement.getAttribute('d')).toContain(
      'M44.3303 15.8028L47.5053 19.0205L41.9303 24.6706L47.5053 30.3207L44.3303 33.5385L38.7553 27.8884L33.1804 33.5385L30.0054 30.3207L35.5803 24.6706L30.0054 19.0205L33.1804 15.8028L38.7553 21.4529L44.3303 15.8028Z',
    );
    expect(secondPathElement.getAttribute('d')).toContain(
      'M23.4554 0.80343C22.9977 0.612564 22.4945 0.563647 22.0094 0.662876C21.5243 0.762105 21.0791 1.00502 20.7304 1.36084L10.0054 13.2691H2.50537C1.84233 13.2691 1.20645 13.536 0.737604 14.0112C0.268763 14.4863 0.00537109 15.1308 0.00537109 15.8028V31.0048C0.00537109 31.6767 0.268763 32.3212 0.737604 32.7963C1.20645 33.2715 1.84233 33.5384 2.50537 33.5384H10.0054L20.7304 45.472C21.08 45.8293 21.5268 46.073 22.0137 46.172C22.5005 46.271 23.0055 46.2208 23.4641 46.0278C23.9227 45.8348 24.3142 45.5078 24.5887 45.0884C24.8632 44.6691 25.0083 44.1764 25.0054 43.6731V3.13441C25.0029 2.6342 24.8544 2.14592 24.5786 1.7311C24.3027 1.31629 23.9119 0.993506 23.4554 0.80343Z',
    );
  });
});
