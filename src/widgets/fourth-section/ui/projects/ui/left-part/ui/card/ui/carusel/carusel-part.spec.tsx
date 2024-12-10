import { screen } from '@testing-library/react';

describe('LeftPart Component Tests', () => {
  test('The `LeftPart` component should render without crashing', () => {
    const leftPartElement = screen.queryByTestId('left-part');
    expect(leftPartElement).toBeDefined();
  });
});
