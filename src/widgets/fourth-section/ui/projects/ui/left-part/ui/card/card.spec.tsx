import { screen } from '@testing-library/react';

describe('LeftPartCard Component Tests', () => {
  test('The `LeftPartCard` component should render without crashing', () => {
    const leftPartCardElement = screen.queryByTestId('left-part-card');
    expect(leftPartCardElement).toBeDefined();
  });
});
