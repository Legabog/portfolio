import { FC } from 'react';
import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { NavigateButton } from './navigate-button';

const ComponentWithMocks: FC = () => (
  <CombineMocks>
    <NavigateButton />
  </CombineMocks>
);

describe('NavigateButton Component Tests', () => {
  test('The `NavigateButton` component should render without crashing', () => {
    render(<ComponentWithMocks />);
    const navigateButtonElement = screen.getByTestId('navigate-button');
    expect(navigateButtonElement).toBeInTheDocument();
  });
});
