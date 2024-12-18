import { screen } from '@testing-library/react';

describe('FifthSection Component Tests', () => {
  test('The `FifthSection` component should render without crashing', () => {
    const fifthSectionElement = screen.queryByTestId('fifth-section');
    expect(fifthSectionElement).toBeDefined();
  });
});
