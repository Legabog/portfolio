import { screen } from '@testing-library/react';

describe('RightPart Component Tests', () => {
  test('The `RightPart` component should render without crashing', () => {
    const rightPartElement = screen.queryByTestId('right-part');
    expect(rightPartElement).toBeDefined();
  });
});
