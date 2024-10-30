import { FC } from 'react';

import { StyledSvg } from '@shared/ui';

export const SoundEffectOnIcon: FC = () => (
  <StyledSvg
    data-testid='sound-effect-on-icon-svg'
    height='16'
    viewBox='0 0 60 60'
    width='16'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M30 39.9971V44.997H10V14.9975H30V19.9974H35V9.99761C35 7.23766 32.76 4.9977 30 4.9977H10C7.24 4.9977 5 7.23766 5 9.99761V49.9969C5 52.7568 7.24 54.9968 10 54.9968H30C32.76 54.9968 35 52.7568 35 49.9969V39.9971H30Z'
      data-testid='sound-effect-on-icon-path-1'
    />
    <path
      d='M40 3.62561V24.2752C39.2325 23.9403 38.39 23.7478 37.5 23.7478C34.05 23.7478 31.25 26.5477 31.25 29.9976C31.25 33.4476 34.05 36.2475 37.5 36.2475C43.935 36.2475 45 29.9976 45 29.9976V13.2154L49.3575 16.2604L52.22 12.1605L40 3.62561Z'
      data-testid='sound-effect-on-icon-path-2'
    />
  </StyledSvg>
);
