import { FC } from 'react';

import { ChevronDownIcon } from '@shared/ui/icons';
import { Wrapper } from './navigate-button.styled';

export const NavigateButton: FC = () => (
  <Wrapper>
    <ChevronDownIcon />
  </Wrapper>
);
