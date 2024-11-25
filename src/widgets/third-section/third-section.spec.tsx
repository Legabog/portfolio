import { screen } from '@testing-library/react';

describe('ThirdSection Component Tests', () => {
  test('The `ThirdSection` component should render without crashing', () => {
    const thirdSectionElement = screen.queryByTestId('third-section');
    expect(thirdSectionElement).toBeDefined();
  });
});
