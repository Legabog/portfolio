import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { NAVIGATOR_ITEMS } from '../../constants';
import { NavigatorItem } from './navigator-item';

describe('NavigatorItem Component Tests', () => {
  test('The `NavigatorItem` component should render without crashing', () => {
    render(
      <CombineMocks>
        {NAVIGATOR_ITEMS.map((itemProps) => (
          <NavigatorItem key={ itemProps.id } { ...itemProps } />
        ))}
      </CombineMocks>,
    );

    NAVIGATOR_ITEMS.forEach(({ id }) => {
      const item = screen.getByTestId(`navigator-item-${id}`);
      expect(item).toBeInTheDocument();
    });
  });
});
