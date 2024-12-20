import { FC } from 'react';

import { StyledSvg } from '@shared/ui';

export const ThreeIcon: FC = () => (
  <StyledSvg
    data-testid='three-icon-svg'
    height='48'
    viewBox='0 0 226.77 226.77'
    width='48'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g
      fillRule='evenodd'
      strokeLinecap='butt'
      strokeLinejoin='round'
      strokeWidth='4'
      transform='translate(8.964 4.2527)'
    >
      <path d='m63.02 200.61-43.213-174.94 173.23 49.874z' data-testid='three-icon-path-1' />
      <path d='m106.39 50.612 21.591 87.496-86.567-24.945z' data-testid='three-icon-path-2' />
      <path d='m84.91 125.03-10.724-43.465 43.008 12.346z' data-testid='three-icon-path-3' />
      <path d='m63.458 38.153 10.724 43.465-43.008-12.346z' data-testid='three-icon-path-4' />
      <path d='m149.47 62.93 10.724 43.465-43.008-12.346z' data-testid='three-icon-path-5' />
      <path d='m84.915 125.06 10.724 43.465-43.008-12.346z' data-testid='three-icon-path-6' />
    </g>
  </StyledSvg>
);
