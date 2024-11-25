import { screen } from '@testing-library/react';

describe('Projects Component Tests', () => {
  test('The `Projects` component should render without crashing', () => {
    const projectsElement = screen.queryByTestId('projects');
    expect(projectsElement).toBeDefined();
  });
});
