import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { MainIcon } from './main';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <MainIcon />
  </CombineMocks>
);

describe('MainIcon Component', () => {
  test('Test MainIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test MainIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const svgElement = getByTestId('main-icon-svg');
    expect(svgElement).toHaveAttribute('height', '38');
    expect(svgElement).toHaveAttribute('width', '38');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 38 38');
  });

  test('Test MainIcon renders correct paths attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);

    const pathElementFirst = getByTestId('main-icon-path-1');
    const pathElementSecond = getByTestId('main-icon-path-2');

    expect(pathElementFirst.getAttribute('d')).toContain(
      'M7 15C7 10.5817 10.5817 7 15 7H23C27.4183 7 31 10.5817 31 15V23C31 27.4183 27.4183 31 23 31H15C10.5817 31 7 27.4183 7 23V15Z',
    );
    expect(pathElementSecond.getAttribute('d')).toContain(
      'M5 25.5H9C10.933 25.5 12.5 27.067 12.5 29V33C12.5 34.933 10.933 36.5 9 36.5H5C3.067 36.5 1.5 34.933 1.5 33V29C1.5 27.067 3.067 25.5 5 25.5Z',
    );
  });
});
