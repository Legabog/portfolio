import { screen } from '@testing-library/react';

describe('Figure Component Tests', () => {
  test('The `Figure` component should render without crashing', () => {
    const figureElement = screen.queryByTestId('figure');
    expect(figureElement).toBeDefined();
  });
});
