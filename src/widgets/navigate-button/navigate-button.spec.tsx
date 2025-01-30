import { FC } from 'react';
import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { NavigateButton } from './navigate-button';

jest.mock('./navigate-button.tsx');

const ComponentWithMocks: FC = () => (
  <CombineMocks>
    <NavigateButton />
  </CombineMocks>
);

describe('NavigateButton Component Tests', () => {
  test('The `NavigateButton` component should render without crashing', () => {
    render(<ComponentWithMocks />);
    const navigateButtonElement = screen.queryByTestId('navigate-button');
    expect(navigateButtonElement).toBeDefined();
  });
});
