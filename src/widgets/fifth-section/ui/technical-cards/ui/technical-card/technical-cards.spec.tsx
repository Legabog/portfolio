import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { TECHNICAL_CARDS } from '../../constants';
import { TechnicalCard } from './technical-card';

describe('TechnicalCard Component Tests', () => {
  test('The `TechnicalCard` component should render without crashing', () => {
    render(
      <CombineMocks>
        {TECHNICAL_CARDS.map((props) => (
          <TechnicalCard key={ props.id } { ...props } />
        ))}
      </CombineMocks>,
    );

    TECHNICAL_CARDS.forEach(({ id }) => {
      const item = screen.getByTestId(id);
      expect(item).toBeInTheDocument();
    });
  });
});
