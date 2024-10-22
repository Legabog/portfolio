import { screen } from '@testing-library/react';

describe('FirstSectionTypedText Component Tests', () => {
  test('The `FirstSectionTypedText` component should render without crashing', () => {
    const typedTextElement = screen.queryByTestId('first-section-typed-text');
    expect(typedTextElement).toBeDefined();
  });
});
