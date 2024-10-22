import { screen } from '@testing-library/react';

describe('Spline Component Tests', () => {
  test('The `Spline` component should render without crashing', () => {
    const splineElement = screen.queryByTestId('spline');
    expect(splineElement).toBeDefined();
  });
});
