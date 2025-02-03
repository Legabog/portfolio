import { FC } from 'react';
import { render, screen } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { CommonScrollSection } from './common-scroll-section';

const ComponentWithMocks: FC = () => (
  <CombineMocks>
    <CommonScrollSection />
  </CombineMocks>
);

describe('CommonScrollSection Component Tests', () => {
  test('The `CommonScrollSection` component should render without crashing', () => {
    render(<ComponentWithMocks />);
    const commonScrollSectionElement = screen.getByTestId('common-scroll-section');
    expect(commonScrollSectionElement).toBeInTheDocument();
  });
});
