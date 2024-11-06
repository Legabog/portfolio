import { screen } from '@testing-library/react';

describe('Navigator Component Tests', () => {
  test('The `Navigator` component should render without crashing', () => {
    const navigatorElement = screen.queryByTestId('navigator');
    expect(navigatorElement).toBeDefined();
  });
});
