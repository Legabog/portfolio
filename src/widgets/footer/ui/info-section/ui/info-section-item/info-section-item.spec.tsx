import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { INFO_ITEMS } from '../../constants';
import { InfoSectionItem } from './info-section-item';

describe('InfoSectionItem Component Tests', () => {
  test('The `InfoSection` component should render without crashing', () => {
    render(
      <CombineMocks>
        {INFO_ITEMS.map((itemProps) => (
          <InfoSectionItem key={ itemProps.id } { ...itemProps } />
        ))}
      </CombineMocks>,
    );

    INFO_ITEMS.forEach(({ id }) => {
      const item = screen.getByTestId(`footer-info-section-${id}`);
      expect(item).toBeInTheDocument();
    });
  });
});
