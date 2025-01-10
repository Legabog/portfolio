import { FC } from 'react';

import { Wrapper, WrapperCard } from './cards.styled';
import { Robot, Figure } from './ui';

export const Cards: FC = () => (
  <Wrapper>
    <WrapperCard>
      <Robot />
    </WrapperCard>
    <WrapperCard>
      <Figure />
    </WrapperCard>
  </Wrapper>
);
