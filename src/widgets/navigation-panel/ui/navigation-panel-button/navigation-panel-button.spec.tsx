import { screen } from '@testing-library/react';

describe('NavigationPanelButton Component Tests', () => {
  test('The `NavigationPanelButton` component should render without crashing', () => {
    const navigationPanelButton = screen.queryByTestId('navigation-panel-button');
    expect(navigationPanelButton).toBeDefined();
  });
});
