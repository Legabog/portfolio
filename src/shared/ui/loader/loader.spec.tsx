import { FC } from 'react';
import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { Loader } from './loader';

const ComponentWithMocks: FC = () => (
  <CombineMocks>
    <Loader />
  </CombineMocks>
);

describe('Loader Component Tests', () => {
  test('The `Loader` component should render without crashing', () => {
    render(<ComponentWithMocks />);
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });
});
