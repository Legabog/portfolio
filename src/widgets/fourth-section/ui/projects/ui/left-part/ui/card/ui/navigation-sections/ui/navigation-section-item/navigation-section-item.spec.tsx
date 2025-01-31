import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { SECTIONS } from '../../constants';
import { NavigationSectionItem } from './navigation-section-item';

describe('NavigationSectionItem Component Tests', () => {
  test('The `NavigationSectionItem` component should render without crashing', () => {
    render(
      <CombineMocks>
        {SECTIONS.map((props) => (
          <NavigationSectionItem key={ props.id } { ...props } activeOverlappingType='linkify' />
        ))}
      </CombineMocks>,
    );

    SECTIONS.forEach(({ id }) => {
      const item = screen.getByTestId(`${id}`);
      expect(item).toBeInTheDocument();
    });
  });
});
