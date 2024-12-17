import { screen } from '@testing-library/react';

describe('Project section Carusel Component Tests', () => {
  ['left', 'right'].map((type) =>
    test(`Project section the '${type} Carusel' component should render without crashing`, () => {
      const carusel = screen.queryByTestId(`project-section-${type}-carusel`);
      expect(carusel).toBeDefined();
    }),
  );
});
