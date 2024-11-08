import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { Language } from './language';

describe('Language Component Tests', () => {
  test('The `Language` component should render without crashing', () => {
    render(
      <CombineMocks>
        <Language />
      </CombineMocks>,
    );
    const languageElement = screen.getByTestId('language');
    expect(languageElement).toBeInTheDocument();
  });
});
