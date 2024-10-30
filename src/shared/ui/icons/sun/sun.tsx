import { FC } from 'react';

import { StyledSvg } from '@shared/ui';

export const SunIcon: FC = () => (
  <StyledSvg
    data-testid='sun-icon-svg'
    height='16'
    viewBox='0 0 50 50'
    width='16'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M25.0001 37.5042C31.9036 37.5042 37.5001 31.9079 37.5001 25.0045C37.5001 18.101 31.9036 12.5047 25.0001 12.5047C18.0965 12.5047 12.5001 18.101 12.5001 25.0045C12.5001 31.9079 18.0965 37.5042 25.0001 37.5042Z'
      data-testid='sun-icon-path-1'
    />
    <path
      d='M27.5003 0.00488281H22.5003V7.50475H27.5003V0.00488281Z'
      data-testid='sun-icon-path-2'
    />
    <path
      d='M44.4441 9.09235L40.9086 5.55692L35.6035 10.8618L39.139 14.3973L44.4441 9.09235Z'
      data-testid='sun-icon-path-3'
    />
    <path d='M50.0005 22.5044H42.5006V27.5044H50.0005V22.5044Z' data-testid='sun-icon-path-4' />
    <path
      d='M35.6028 39.1478L40.9086 44.452L44.4418 40.9178L39.136 35.6137L35.6028 39.1478Z'
      data-testid='sun-icon-path-5'
    />
    <path d='M27.5003 42.504H22.5003V50.0039H27.5003V42.504Z' data-testid='sun-icon-path-6' />
    <path
      d='M5.55797 40.9206L9.0922 44.4537L14.3965 39.148L10.8622 35.6149L5.55797 40.9206Z'
      data-testid='sun-icon-path-7'
    />
    <path d='M7.50024 22.5044H0.000244141V27.5044H7.50024V22.5044Z' data-testid='sun-icon-path-8' />
    <path
      d='M14.3968 10.8618L9.09176 5.55692L5.55626 9.09235L10.8613 14.3973L14.3968 10.8618Z'
      data-testid='sun-icon-path-9'
    />
  </StyledSvg>
);
