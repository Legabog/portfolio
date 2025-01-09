import { FC } from 'react';

import { Wrapper, WrapperCard } from './cards.styled';
import { Robot } from './ui';

export const Cards: FC = () => (
    <Wrapper>
      <WrapperCard>
        <Robot />
      </WrapperCard>
      <WrapperCard>
        <Robot />
      </WrapperCard>
    </Wrapper>
  );
