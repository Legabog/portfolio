import { FC } from 'react';
import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { ScrollDown } from './scroll-down';

const ComponentWithMocks: FC = () => (
  <CombineMocks>
    <ScrollDown />
  </CombineMocks>
);

describe('ScrollDown Component Tests', () => {
  test('The `ScrollDown` component should render without crashing', () => {
    render(<ComponentWithMocks />);
    const headerElement = screen.getByTestId('scroll-down');
    expect(headerElement).toBeInTheDocument();
  });
});
