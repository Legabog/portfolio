import { screen } from '@testing-library/react';

describe('ProjectSection Component Tests', () => {
  test('The `ProjectSection` component should render without crashing', () => {
    const projectSectionElement = screen.queryByTestId('project-section');
    expect(projectSectionElement).toBeDefined();
  });
});
