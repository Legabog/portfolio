import { FC } from 'react';

import { Wrapper, StyledImage } from './background.styled';
import { useLogic } from './lib';

export const Background: FC = () => {
  const { width, height, resizeRef } = useLogic();

  return (
    <Wrapper ref={ resizeRef } data-testid='left-part-background'>
      <StyledImage alt='background' height={ height } src='/images/background.png' width={ width } />
    </Wrapper>
  );
};
