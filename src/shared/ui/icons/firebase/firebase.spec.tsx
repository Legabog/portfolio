import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { FirebaseIcon } from './firebase';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <FirebaseIcon />
  </CombineMocks>
);

describe('FirebaseIcon Component', () => {
  test('Test FirebaseIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test FirebaseIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);

    const svgElement = getByTestId('firebase-icon-svg');
    expect(svgElement).toHaveAttribute('height', '48');
    expect(svgElement).toHaveAttribute('width', '48');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 128 128');
  });

  test('Test FirebaseIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const pathElement = getByTestId('firebase-icon-path');
    expect(pathElement.getAttribute('d')).toContain(
      'M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z',
    );
  });
});
