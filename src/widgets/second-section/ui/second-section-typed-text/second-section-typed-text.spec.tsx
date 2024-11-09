import { screen } from '@testing-library/react';

describe('SecondSectionTypedText Component Tests', () => {
  test('The `SecondSectionTypedText` component should render without crashing', () => {
    const secondSectionTypedTextElement = screen.queryByTestId('second-section-typed-text');
    expect(secondSectionTypedTextElement).toBeDefined();
  });
});
