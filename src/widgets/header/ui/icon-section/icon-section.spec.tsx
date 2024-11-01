import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { IconSection } from './icon-section';

describe('IconSection Component Tests', () => {
  test('The `IconSection` component should render without crashing', () => {
    render(
      <CombineMocks>
        <IconSection />
      </CombineMocks>,
    );
    const iconSectionElement = screen.getByTestId('icon-section');
    expect(iconSectionElement).toBeInTheDocument();
  });
});
