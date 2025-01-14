import { screen } from '@testing-library/react';

describe('ThirdSectionCard Component Tests', () => {
  test('The `ThirdSectionCard` component should render without crashing', () => {
    const thirdSectionCardElement = screen.queryByTestId('third-section-card');
    expect(thirdSectionCardElement).toBeDefined();
  });
});
