import { screen } from '@testing-library/react';

describe('Human Component Tests', () => {
  test('The `Human` component should render without crashing', () => {
    const humanElement = screen.queryByTestId('human');
    expect(humanElement).toBeDefined();
  });
});
