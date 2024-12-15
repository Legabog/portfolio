import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { WebpackIcon } from './webpack';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <WebpackIcon />
  </CombineMocks>
);

describe('WebpackIcon Component', () => {
  test('Test WebpackIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test WebpackIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);

    const svgElement = getByTestId('webpack-icon-svg');
    expect(svgElement).toHaveAttribute('height', '48');
    expect(svgElement).toHaveAttribute('width', '48');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 24 24');
  });

  test('Test WebpackIcon renders correct path attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const pathElement = getByTestId('webpack-icon-path');
    expect(pathElement.getAttribute('d')).toContain(
      'M21.0157 18.1202L12.351 23v-3.8007l5.3986-2.9567 3.266 1.8776zm.5927-.5344V7.3805l-3.1708 1.822v6.5593l3.1708 1.824zm-18.6827.5344L11.5904 23v-3.8007l-5.3986-2.9567-3.266 1.8776zm-.5927-.5344V7.3805l3.1707 1.822v6.5593l-3.1707 1.824zm.371-10.8656l8.8864-5.0056v3.6748L5.8974 8.507l-.0434.0248-3.15-1.8116zm18.5335 0L12.351 1.7146v3.6748l5.693 3.1177.0434.0248 3.15-1.8116zm-9.647 11.6146l-5.3262-2.9155V9.642l5.326 3.062v5.6308zm.7605 0l5.326-2.9155V9.642l-5.326 3.062v5.6308zM6.625 8.9734l5.3467-2.928 5.3468 2.928-5.3468 3.0744L6.625 8.9734z',
    );
  });
});
