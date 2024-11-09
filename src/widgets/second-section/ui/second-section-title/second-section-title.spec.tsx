import { screen } from '@testing-library/react';

describe('SecondSectionTitle Component Tests', () => {
  test('The `SecondSectionTitle` component should render without crashing', () => {
    const secondSectionTitleElement = screen.queryByTestId('second-section-title');
    expect(secondSectionTitleElement).toBeDefined();
  });
});
