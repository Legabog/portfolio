import { FC } from 'react';

import { StyledSvg } from '@shared/ui';

export const VercelIcon: FC = () => (
  <StyledSvg
    data-testid='vercel-icon-svg'
    height='48'
    viewBox='0 0 512 512'
    width='48'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M256,48,496,464H16Z' data-testid='vercel-icon-path' fillRule='evenodd' />
  </StyledSvg>
);
