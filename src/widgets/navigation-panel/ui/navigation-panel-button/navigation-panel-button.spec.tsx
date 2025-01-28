import { screen } from '@testing-library/react';

describe('NavigationPanelButton Component Tests', () => {
  test('The `NavigationPanelButton` top component should render without crashing', () => {
    const navigationPanelTopButton = screen.queryByTestId('navigation-panel-top-button');
    expect(navigationPanelTopButton).toBeDefined();
  });
  test('The `NavigationPanelButton` bottom component should render without crashing', () => {
    const navigationPanelBottomButton = screen.queryByTestId('navigation-panel-bottom-button');
    expect(navigationPanelBottomButton).toBeDefined();
  });
});
