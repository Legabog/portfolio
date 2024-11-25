import { screen } from '@testing-library/react';

describe('FourthSectionTitle Component Tests', () => {
  test('The `FourthSectionTitle` component should render without crashing', () => {
    const fourthSectionTitleElement = screen.queryByTestId('fourth-section-title');
    expect(fourthSectionTitleElement).toBeDefined();
  });
});
