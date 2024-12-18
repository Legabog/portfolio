import { screen } from '@testing-library/react';

describe('FifthSectionTitle Component Tests', () => {
  test('The `FifthSectionTitle` component should render without crashing', () => {
    const fifthSectionTitleElement = screen.queryByTestId('fifth-section-title');
    expect(fifthSectionTitleElement).toBeDefined();
  });
});
