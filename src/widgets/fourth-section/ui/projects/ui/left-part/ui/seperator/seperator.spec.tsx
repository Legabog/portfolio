import { screen } from '@testing-library/react';

describe('LeftPartSeperator Component Tests', () => {
  test('The `LeftPartSeperator` component should render without crashing', () => {
    const leftPartSeperatorElement = screen.queryByTestId('left-part-seperator');
    expect(leftPartSeperatorElement).toBeDefined();
  });
});
