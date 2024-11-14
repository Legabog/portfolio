import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { CARDS } from '../../constants';
import { SecondSectionCard } from './second-section-card';

describe('SecondSectionCard Component Tests', () => {
  test('The `SecondSectionCard` component should render without crashing', () => {
    render(
      <CombineMocks>
        {CARDS.map((props) => (
          <SecondSectionCard key={ props.id } { ...props } />
        ))}
      </CombineMocks>,
    );

    CARDS.forEach(({ id }) => {
      const item = screen.getByTestId(`second-section-card-${id}`);
      expect(item).toBeInTheDocument();
    });
  });
});
