import { screen } from '@testing-library/react';

describe('SecondSectionCards Component Tests', () => {
  test('The `SecondSectionCards` component should render without crashing', () => {
    const secondSectionCardsElement = screen.queryByTestId('second-section-cards');
    expect(secondSectionCardsElement).toBeDefined();
  });
});
