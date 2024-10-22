import { FC } from 'react';
import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { BOTTOM_PANEL_ITEMS } from './constants';
import { BottomPanel } from './bottom-panel';

const ComponentWithMocks: FC = () => (
  <CombineMocks>
    <BottomPanel />
  </CombineMocks>
);

describe('BottomPanel Component Tests', () => {
  test('The `BottomPanel` component should render without crashing', () => {
    render(<ComponentWithMocks />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });

  test('The `BottomPanel` component should render the correct number of `Item` components based on the `BOTTOM_PANEL_ITEMS` array', () => {
    render(<ComponentWithMocks />);
    const itemElements = screen.getAllByTestId('item');
    expect(itemElements.length).toBe(BOTTOM_PANEL_ITEMS.length);
  });
});
