import { screen } from '@testing-library/react';

describe('LeftPart Component Tests', () => {
  test('The `LeftPartBackground` component should render without crashing', () => {
    const leftPartBackgroundElement = screen.queryByTestId('left-part-background');
    expect(leftPartBackgroundElement).toBeDefined();
  });
});