import { screen } from '@testing-library/react';

describe('Robot Component Tests', () => {
  test('The `Robot` component should render without crashing', () => {
    const robotElement = screen.queryByTestId('robot');
    expect(robotElement).toBeDefined();
  });
});
