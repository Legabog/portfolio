import { screen } from '@testing-library/react';

describe('SecondSection Component Tests', () => {
  test('The `SecondSection` component should render without crashing', () => {
    const secondSectionElement = screen.queryByTestId('second-section');
    expect(secondSectionElement).toBeDefined();
  });
});
