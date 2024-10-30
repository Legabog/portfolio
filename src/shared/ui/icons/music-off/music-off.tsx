import { FC } from 'react';

import { StyledSvg } from '@shared/ui';

export const MusicOffIcon: FC = () => (
  <StyledSvg
    data-testid='music-off-icon-svg'
    height='16'
    viewBox='0 0 60 60'
    width='16'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M50.6738 8.17685L8.17383 50.6761L11.7088 54.211L24.1263 41.7937L33.1738 51.7111C33.8888 52.4285 34.9638 52.641 35.8988 52.251C36.8338 51.8661 37.4413 50.9536 37.4413 49.9436V28.479L54.2088 11.7093L50.6738 8.17685Z'
      data-testid='music-off-icon-path-1'
    />
    <path
      d='M37.4413 14.3383V9.94592C37.4413 8.93594 36.8338 8.02096 35.8988 7.63597C34.9638 7.24847 33.8888 7.46097 33.1738 8.17846L22.4413 19.9457H14.9413C13.5663 19.9457 12.4413 21.0707 12.4413 22.4457V37.4454C12.4413 37.9729 12.6463 38.4429 12.9313 38.8479L37.4413 14.3383Z'
      data-testid='music-off-icon-path-2'
    />
  </StyledSvg>
);
