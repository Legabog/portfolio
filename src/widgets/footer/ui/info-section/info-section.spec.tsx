import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { InfoSection } from './info-section';

describe('InfoSection Component Tests', () => {
  test('The `InfoSection` component should render without crashing', () => {
    render(
      <CombineMocks>
        <InfoSection />
      </CombineMocks>,
    );
    const infoSectionElement = screen.getByTestId('footer-info-section');
    expect(infoSectionElement).toBeInTheDocument();
  });
});
