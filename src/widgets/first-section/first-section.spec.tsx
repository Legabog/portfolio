import { screen } from '@testing-library/react';

describe('FirstSection Component Tests', () => {
  test('The `FirstSection` component should render without crashing', () => {
    const firstSectionElement = screen.queryByTestId('first-section');
    expect(firstSectionElement).toBeDefined();
  });
});
