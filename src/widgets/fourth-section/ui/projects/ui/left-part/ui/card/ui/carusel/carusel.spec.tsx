import { screen } from '@testing-library/react';

describe('Carusel Component Tests', () => {
  ['left', 'right'].map((type) =>
    test(`The '${type} Carusel' component should render without crashing`, () => {
      const carusel = screen.queryByTestId(`${type}-carusel`);
      expect(carusel).toBeDefined();
    }),
  );
});
