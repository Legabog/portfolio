import { screen } from '@testing-library/react';

describe('SectionTitle Component Tests', () => {
  test('The `SectionTitle` component should render without crashing', () => {
    const sectionTitleElement = screen.queryByTestId('section-title');
    expect(sectionTitleElement).toBeDefined();
  });
});
