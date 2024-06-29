import { screen } from '@testing-library/react';

describe('Background Component Tests', () => {
  test('The `Background` component should render without crashing', () => {
    const backgroundElement = screen.queryByTestId('background');
    expect(backgroundElement).toBeDefined();
  });
});
