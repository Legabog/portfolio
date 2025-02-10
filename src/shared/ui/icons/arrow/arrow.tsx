import { FC } from 'react';

import { StyledSvg } from '@shared/ui';

export const ArrowIcon: FC = () => (
  <StyledSvg
    data-testid='arrow-icon-svg'
    fill='none'
    height='24'
    viewBox='0 0 24 24'
    width='24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      clipRule='evenodd'
      d='M11.4893 3.10496L4.29687 9.46964L4.95957 10.2185L11.3208 4.58936L11.3208 21.2959L12.3208 21.2959L12.3208 4.58766L18.6848 10.2039L19.3465 9.45408L12.1515 3.10451C11.9623 2.93752 11.6783 2.93772 11.4893 3.10496Z'
      data-testid='arrow-icon-path'
      fillRule='evenodd'
    />
  </StyledSvg>
);
