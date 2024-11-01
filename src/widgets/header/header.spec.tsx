import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { Header } from './header';

jest.mock('./ui');

describe('Header Component Tests', () => {
  test('The `Header` component should render without crashing', () => {
    render(
      <CombineMocks>
        <Header />
      </CombineMocks>,
    );
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
});
