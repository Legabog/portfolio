import { FC } from 'react';

import { StyledSvg } from '@shared/ui';

export const AlertIcon: FC = () => (
  <StyledSvg
    data-testid='alert-icon-svg'
    height='48'
    viewBox='0 0 60 60'
    width='48'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M36.2543 4.96655H23.7543V36.0068H36.2543V4.96655Z' data-testid='alert-icon-path-1' />
    <path
      d='M23.7543 48.7507C23.7543 52.0842 26.6709 55.0007 30.0043 55.0007C33.3376 55.0007 36.2543 52.0842 36.2543 48.7507C36.2543 45.4174 33.3376 42.5007 30.0043 42.5007C26.6709 42.5007 23.7543 45.4174 23.7543 48.7507Z'
      data-testid='alert-icon-path-2'
    />
  </StyledSvg>
);
