import { screen } from '@testing-library/react';

describe('NavigationSections Component Tests', () => {
  test('The `NavigationSections` component should render without crashing', () => {
    const navigationSectionsElement = screen.queryByTestId('navigation-sections');
    expect(navigationSectionsElement).toBeDefined();
  });
});
