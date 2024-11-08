import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { Theme } from './theme';

describe('Theme Component Tests', () => {
  test('The `Theme` component should render without crashing', () => {
    render(
      <CombineMocks>
        <Theme />
      </CombineMocks>,
    );
    const themeElement = screen.getByTestId('theme');
    expect(themeElement).toBeInTheDocument();
  });
});
