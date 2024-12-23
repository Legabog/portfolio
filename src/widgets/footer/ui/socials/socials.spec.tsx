import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { Socials } from './socials';

describe('Socials Component Tests', () => {
  test('The `Socials` component should render without crashing', () => {
    render(
      <CombineMocks>
        <Socials />
      </CombineMocks>,
    );
    const socialsElement = screen.getByTestId('socials');
    expect(socialsElement).toBeInTheDocument();
  });
});
