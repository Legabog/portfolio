import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { NAVIGATOR_TITLES } from '../../constants';
import { NavigatorTitle } from './navigator-title';

describe('NavigatorTitle Component Tests', () => {
  test('The `NavigatorTitle` component should render without crashing', () => {
    render(
      <CombineMocks>
        {NAVIGATOR_TITLES.map((itemProps) => (
          <NavigatorTitle key={ itemProps.id } { ...itemProps } />
        ))}
      </CombineMocks>,
    );

    NAVIGATOR_TITLES.forEach(({ id }) => {
      const title = screen.getByTestId(`navigator-title-${id}`);
      expect(title).toBeInTheDocument();
    });
  });
});
