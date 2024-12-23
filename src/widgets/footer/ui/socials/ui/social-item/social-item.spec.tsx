import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { SOCIALS_ITEMS } from '../../constants';
import { SocialItem } from './social-item';

describe('SocialItem Component Tests', () => {
  test('The `SocialItem` component should render without crashing', () => {
    render(
      <CombineMocks>
        {SOCIALS_ITEMS.map((itemProps) => (
          <SocialItem key={ itemProps.id } { ...itemProps } />
        ))}
      </CombineMocks>,
    );

    SOCIALS_ITEMS.forEach(({ id }) => {
      const item = screen.getByTestId(`social-${id}`);
      expect(item).toBeInTheDocument();
    });
  });
});
