import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { SwitcherSection } from './switcher-section';

jest.mock('./ui');

describe('SwitcherSection Component Tests', () => {
  test('The `SwitcherSection` component should render without crashing', () => {
    render(
      <CombineMocks>
        <SwitcherSection />
      </CombineMocks>,
    );
    const footerElement = screen.getByTestId('switcher-section');
    expect(footerElement).toBeInTheDocument();
  });
});
