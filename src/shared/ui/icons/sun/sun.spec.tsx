import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { SunIcon } from './sun';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <SunIcon />
  </CombineMocks>
);

describe('SunIcon Component', () => {
  test('Test SunIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test SunIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);

    const svgElement = getByTestId('sun-icon-svg');
    expect(svgElement).toHaveAttribute('height', '18');
    expect(svgElement).toHaveAttribute('width', '18');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 50 50');
  });

  test('Test SunIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const firstPathElement = getByTestId('sun-icon-path-1');
    const secondPathElement = getByTestId('sun-icon-path-2');
    const thirdPathElement = getByTestId('sun-icon-path-3');
    const fourPathElement = getByTestId('sun-icon-path-4');
    const fivePathElement = getByTestId('sun-icon-path-5');
    const sixPathElement = getByTestId('sun-icon-path-6');
    const sevenPathElement = getByTestId('sun-icon-path-7');
    const eightPathElement = getByTestId('sun-icon-path-8');
    const ninePathElement = getByTestId('sun-icon-path-9');

    expect(firstPathElement.getAttribute('d')).toContain(
      'M25.0001 37.5042C31.9036 37.5042 37.5001 31.9079 37.5001 25.0045C37.5001 18.101 31.9036 12.5047 25.0001 12.5047C18.0965 12.5047 12.5001 18.101 12.5001 25.0045C12.5001 31.9079 18.0965 37.5042 25.0001 37.5042Z',
    );
    expect(secondPathElement.getAttribute('d')).toContain(
      'M27.5003 0.00488281H22.5003V7.50475H27.5003V0.00488281Z',
    );
    expect(thirdPathElement.getAttribute('d')).toContain(
      'M44.4441 9.09235L40.9086 5.55692L35.6035 10.8618L39.139 14.3973L44.4441 9.09235Z',
    );
    expect(fourPathElement.getAttribute('d')).toContain(
      'M50.0005 22.5044H42.5006V27.5044H50.0005V22.5044Z',
    );
    expect(fivePathElement.getAttribute('d')).toContain(
      'M35.6028 39.1478L40.9086 44.452L44.4418 40.9178L39.136 35.6137L35.6028 39.1478Z',
    );
    expect(sixPathElement.getAttribute('d')).toContain(
      'M27.5003 42.504H22.5003V50.0039H27.5003V42.504Z',
    );
    expect(sevenPathElement.getAttribute('d')).toContain(
      'M5.55797 40.9206L9.0922 44.4537L14.3965 39.148L10.8622 35.6149L5.55797 40.9206Z',
    );
    expect(eightPathElement.getAttribute('d')).toContain(
      'M7.50024 22.5044H0.000244141V27.5044H7.50024V22.5044Z',
    );
    expect(ninePathElement.getAttribute('d')).toContain(
      'M14.3968 10.8618L9.09176 5.55692L5.55626 9.09235L10.8613 14.3973L14.3968 10.8618Z',
    );
  });
});
