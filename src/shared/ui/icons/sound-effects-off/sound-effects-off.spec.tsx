import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { SoundEffectOffIcon } from './sound-effects-off';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <SoundEffectOffIcon />
  </CombineMocks>
);

describe('SoundEffectOffIcon Component', () => {
  test('Test SoundEffectOffIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test SoundEffectOffIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);

    const svgElement = getByTestId('sound-effect-off-icon-svg');
    expect(svgElement).toHaveAttribute('height', '16');
    expect(svgElement).toHaveAttribute('width', '16');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 60 60');
  });

  test('Test SoundEffectOffIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const firstPathElement = getByTestId('sound-effect-off-icon-path-1');
    const secondPathElement = getByTestId('sound-effect-off-icon-path-2');
    expect(firstPathElement.getAttribute('d')).toContain(
      'M35.0002 42.4958V44.9958H15.0002V14.9963H35.0002V17.4963H40.0002V9.99643C40.0002 7.23648 37.7602 4.99652 35.0002 4.99652H15.0002C12.2402 4.99652 10.0002 7.23648 10.0002 9.99643V49.9957C10.0002 52.7557 12.2402 54.9956 15.0002 54.9956H35.0002C37.7602 54.9956 40.0002 52.7557 40.0002 49.9957V42.4958H35.0002Z',
    );
    expect(secondPathElement.getAttribute('d')).toContain(
      'M49.268 24.2636L45.733 20.7286L40.0005 26.461L34.268 20.7286L30.733 24.2636L36.4655 29.996L30.733 35.7284L34.268 39.2633L40.0005 33.5309L45.733 39.2633L49.268 35.7284L43.5355 29.996L49.268 24.2636Z',
    );
  });
});
