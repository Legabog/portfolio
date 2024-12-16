import { screen } from '@testing-library/react';

describe('Carusel Component Tests', () => {
  test('The `Carusel` component should render without crashing', () => {
    const leftCaruselElement = screen.queryByTestId('left-carusel');
    const rightCaruselElement = screen.queryByTestId('right-carusel');
    expect(leftCaruselElement).toBeDefined();
    expect(rightCaruselElement).toBeDefined();
  });
});
