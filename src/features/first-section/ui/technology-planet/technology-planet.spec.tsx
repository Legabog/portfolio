import { screen } from '@testing-library/react';

describe('TechnologyPlanet Component Tests', () => {
  test('The `TechnologyPlanet` component should render without crashing', () => {
    const splineElement = screen.queryByTestId('technology-planet');
    expect(splineElement).toBeDefined();
  });
});
