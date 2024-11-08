import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { Music } from './music';

describe('Music Component Tests', () => {
  test('The `Music` component should render without crashing', () => {
    render(
      <CombineMocks>
        <Music />
      </CombineMocks>,
    );
    const musicElement = screen.getByTestId('music');
    expect(musicElement).toBeInTheDocument();
  });
});
