import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { MobileMenu } from './mobile-menu';

jest.mock('.');

describe('MobileMenu Component Tests', () => {
  test('The `MobileMenu` component should render without crashing', () => {
    render(
      <CombineMocks>
        <MobileMenu />
      </CombineMocks>,
    );
    const mobileMenuElement = screen.getByTestId('mobile-menu');
    expect(mobileMenuElement).toBeInTheDocument();
  });
});
