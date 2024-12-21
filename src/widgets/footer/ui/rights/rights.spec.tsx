import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { Rights } from './rights';

describe('Rights Component Tests', () => {
  test('The `Rights` component should render without crashing', () => {
    render(
      <CombineMocks>
        <Rights />
      </CombineMocks>,
    );
    const rightsElement = screen.getByTestId('footer-rights');
    expect(rightsElement).toBeInTheDocument();
  });
});
