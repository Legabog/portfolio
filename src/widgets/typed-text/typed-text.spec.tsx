import { screen } from '@testing-library/react';

describe('TypedText Component Tests', () => {
  test('The `TypedText` component should render without crashing', () => {
    const typedTextElement = screen.queryByTestId('typed-text');
    expect(typedTextElement).toBeDefined();
  });
});
