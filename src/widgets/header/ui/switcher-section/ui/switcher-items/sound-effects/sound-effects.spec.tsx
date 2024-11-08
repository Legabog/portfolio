import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { SoundEffects } from './sound-effects';

describe('SoundEffects Component Tests', () => {
  test('The `SoundEffects` component should render without crashing', () => {
    render(
      <CombineMocks>
        <SoundEffects />
      </CombineMocks>,
    );
    const soundEffects = screen.getByTestId('sound-effects');
    expect(soundEffects).toBeInTheDocument();
  });
});
