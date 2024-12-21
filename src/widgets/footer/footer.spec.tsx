import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { Footer } from './footer';

jest.mock('./ui');

describe('Footer Component Tests', () => {
  test('The `Footer` component should render without crashing', () => {
    render(
      <CombineMocks>
        <Footer />
      </CombineMocks>,
    );
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });
});
