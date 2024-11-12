import { FC } from 'react';

import { StyledSvg } from '@shared/ui';

export const SmileIcon: FC = () => (
  <StyledSvg
    data-testid='smile-icon-svg'
    height='24'
    viewBox='0 0 60 60'
    width='24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M29.9998 5.005C16.1948 5.005 4.99976 16.1973 4.99976 30.0046C4.99976 43.8068 16.1948 55.0041 29.9998 55.0041C43.8047 55.0041 54.9997 43.8068 54.9997 30.0046C54.9997 16.1973 43.8047 5.005 29.9998 5.005ZM34.9998 15.0048H39.9997V25.0046H34.9998V15.0048ZM19.9998 15.0048H24.9998V25.0046H19.9998V15.0048ZM44.9997 35.0045C44.9997 41.5468 37.8498 47.5042 29.9998 47.5042C22.1498 47.5042 14.9998 41.5468 14.9998 35.0045V32.5045H44.9997V35.0045Z'
      data-testid='smile-icon-path'
    />
  </StyledSvg>
);
