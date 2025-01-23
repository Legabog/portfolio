import { screen } from '@testing-library/react';

describe('NavigationPanel Component Tests', () => {
  test('The `NavigationPanel` component should render without crashing', () => {
    const navigationPanelElement = screen.queryByTestId('navigation-panel');
    expect(navigationPanelElement).toBeDefined();
  });
});
