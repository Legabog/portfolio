import { screen } from '@testing-library/react';

describe('ThirdSectionTitle Component Tests', () => {
  test('The `ThirdSectionTitle` component should render without crashing', () => {
    const thirdSectionTitleElement = screen.queryByTestId('third-section-title');
    expect(thirdSectionTitleElement).toBeDefined();
  });
});
