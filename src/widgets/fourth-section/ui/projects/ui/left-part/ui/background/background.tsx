import { FC, useState } from 'react';

import { useResizeObserver } from '@shared/hooks';
import { Wrapper, StyledImage } from './background.styled';

export const Background: FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth * 0.8);
  const [customStyles, setCustomStyles] = useState<string>(
    `inset: ${-window.innerHeight / 4}px ${window.innerWidth / 250}px auto;`,
  );
  const resizeHandler = () => {
    setWidth(window.innerWidth * 0.8);
    setCustomStyles(`inset: ${-window.innerHeight / 3.5}px auto auto;`);
  };
  const resizeRef = useResizeObserver(resizeHandler);

  return (
    <Wrapper ref={ resizeRef } data-testid='left-part-background'>
      <StyledImage
        $customStyles={ customStyles }
        alt='background'
        height={ width }
        src='/images/background.png'
        width={ width }
      />
    </Wrapper>
  );
};
