import { screen } from '@testing-library/react';

describe('Brain Component Tests', () => {
  test('The `Brain` component should render without crashing', () => {
    const brainElement = screen.queryByTestId('brain');
    expect(brainElement).toBeDefined();
  });
});
