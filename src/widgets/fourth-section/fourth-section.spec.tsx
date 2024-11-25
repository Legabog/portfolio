import { screen } from '@testing-library/react';

describe('FourthSection Component Tests', () => {
  test('The `FourthSection` component should render without crashing', () => {
    const fourthSectionElement = screen.queryByTestId('fourth-section');
    expect(fourthSectionElement).toBeDefined();
  });
});
