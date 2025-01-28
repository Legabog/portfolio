import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { PANEL_ITEMS } from '../../constants';
import { NavigationPanelItem } from './navigation-panel-item';

describe('NavigationPanelItem Component Tests', () => {
  test('The `NavigationPanelItem` component should render without crashing', () => {
    render(
      <CombineMocks>
        {PANEL_ITEMS.map(({ id, sectionId }) => (
          <NavigationPanelItem key={ id } activeSectionId={ sectionId } id={ id } sectionId={ sectionId } />
        ))}
      </CombineMocks>,
    );

    PANEL_ITEMS.forEach(({ id }) => {
      const item = screen.getByTestId(`navigation-${id}`);
      expect(item).toBeInTheDocument();
    });
  });
});
