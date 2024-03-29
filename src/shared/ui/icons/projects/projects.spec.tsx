import { FC } from 'react';
import { render } from '@testing-library/react';

import { CombineMocks } from '@mocks';
import { ProjectsIcon } from './projects';

const IconWithMocks: FC = () => (
  <CombineMocks>
    <ProjectsIcon />
  </CombineMocks>
);

describe('ProjectsIcon Component', () => {
  test('Test ProjectsIcon renders without errors', () => {
    expect(() => render(<IconWithMocks />)).not.toThrow();
  });

  test('Test ProjectsIcon renders correct svg attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);
    const svgElement = getByTestId('projects-icon-svg');
    expect(svgElement).toHaveAttribute('height', '24');
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('viewBox', '0 0 60 60');
  });

  test('Test ProjectsIcon renders correct paths attributes', () => {
    const { getByTestId } = render(<IconWithMocks />);

    const pathElementFirst = getByTestId('projects-icon-path-1');
    const pathElementSecond = getByTestId('projects-icon-path-2');
    const pathElementThird = getByTestId('projects-icon-path-3');

    expect(pathElementFirst.getAttribute('d')).toContain(
      'M50.7819 9.23647C50.2044 8.66148 49.1444 7.9715 47.3744 7.9715C45.5794 7.9715 43.2269 8.74398 40.5419 10.119C41.8194 10.7964 43.0469 11.6039 44.2019 12.5439C44.9519 12.2364 47.5594 11.3114 48.1294 11.8864C51.1794 14.9214 37.0444 30.7736 33.9944 33.8285C29.9444 37.8785 18.2969 48.2883 12.6469 48.2883C10.9894 48.2883 11.9119 45.7108 12.5344 44.1733C11.5969 43.0184 10.7919 41.7934 10.1169 40.5184C5.71688 49.0608 9.05188 52.0382 12.6469 52.0382C15.5494 52.0382 19.8919 50.0582 24.7819 46.6758C26.4344 47.1983 28.1844 47.5033 30.0119 47.5033C39.6769 47.5033 47.5119 39.6684 47.5119 30.0036C47.5119 28.1811 47.2094 26.4362 46.6894 24.7862C49.5544 20.6588 54.3369 12.7914 50.7819 9.23647Z',
    );

    expect(pathElementSecond.getAttribute('d')).toContain(
      'M42.5419 17.6513C39.9369 21.8312 36.0044 26.6512 31.4794 31.1786C26.8869 35.7685 21.9869 39.7509 17.7569 42.3609L17.7072 42.3109C21.9172 39.7002 26.7814 35.741 31.3423 31.1827C35.8673 26.6553 39.7998 21.8354 42.4048 17.6555C39.2373 14.478 34.8548 12.508 30.0098 12.508C29.8531 12.508 29.6968 12.5101 29.5411 12.5142C29.7422 12.5074 29.9441 12.5039 30.1469 12.5039C34.9919 12.5039 39.3744 14.4739 42.5419 17.6513ZM12.5098 30.0077C12.5098 20.4996 20.0928 12.7626 29.5411 12.5142C20.1566 12.8334 12.6469 20.5415 12.6469 30.0036C12.6469 34.8032 14.5789 39.15 17.7072 42.3109L17.6198 42.365C14.4623 39.2001 12.5098 34.8327 12.5098 30.0077Z',
    );

    expect(pathElementThird.getAttribute('d')).toContain(
      'M31.3423 31.1827C35.8673 26.6553 39.7998 21.8354 42.4048 17.6555C39.2373 14.478 34.8548 12.508 30.0098 12.508C29.8531 12.508 29.6968 12.5101 29.5411 12.5142C20.1566 12.8334 12.6469 20.5415 12.6469 30.0036C12.6469 34.8032 14.5789 39.15 17.7072 42.3109C21.9172 39.7002 26.7814 35.741 31.3423 31.1827Z',
    );
  });
});
