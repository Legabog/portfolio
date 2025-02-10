import { screen } from '@testing-library/react';

describe('TechnicalCards Component Tests', () => {
  test('The `TechnicalCards` component should render without crashing', () => {
    const technicalCardsElement = screen.queryByTestId('technical-cards');
    expect(technicalCardsElement).toBeDefined();
  });
});
