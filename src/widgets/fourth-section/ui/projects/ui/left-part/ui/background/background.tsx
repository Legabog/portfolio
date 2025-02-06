import { FC, useState } from 'react';

import { useResizeObserver } from '@shared/hooks';
import { Wrapper, StyledImage } from './background.styled';

export const Background: FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  const resizeHandler = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  const resizeRef = useResizeObserver(resizeHandler);

  return (
    <Wrapper ref={ resizeRef } data-testid='left-part-background'>
      <StyledImage alt='background' height={ height } src='/images/background.png' width={ width } />
    </Wrapper>
  );
};
