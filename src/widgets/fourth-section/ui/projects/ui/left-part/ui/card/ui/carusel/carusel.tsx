import { FC, useState } from 'react';

import { useResizeObserver } from '@shared/hooks';
import { Wrapper, Span, Li } from './carusel.styled';
import { Props } from './types';

export const Carusel: FC<Props> = ({ caruselType, customStyles = '', words }) => {
  const [caruselStyles, setCaruselStyles] = useState<string>(
    `width: ${window.innerWidth / 2.5}px; height: calc(12vh);`,
  );
  const [wordStyles, setWordStyles] = useState<string>(
    `font-size: 10vh; line-height: 10vh; letter-spacing: -0.4vh;`,
  );
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const onHover = () => setIsPaused(true);
  const onLeave = () => setIsPaused(false);

  const resizeHandler = () => {
    setCaruselStyles(`width: ${window.innerWidth / 2.5}px; height: calc(12vh);`);
    setWordStyles(`font-size: 10vh; line-height: 10vh; letter-spacing: -0.4vh;`);
  };
  const resizeRef = useResizeObserver(resizeHandler);

  const customCaruselStyles = `${caruselStyles} ${customStyles}`;

  return (
    <Wrapper
      ref={ resizeRef }
      $customStyles={ customCaruselStyles }
      data-testid={ `${caruselType}-carusel` }
    >
      {[...Array(2)].map((_, index) => (
        <Span key={ index } $caruselType={ caruselType } $isPaused={ isPaused }>
          {words.map(({ id, text }) => (
            <Li key={ id } $customStyles={ wordStyles } onMouseEnter={ onHover } onMouseLeave={ onLeave }>
              {text}
            </Li>
          ))}
        </Span>
      ))}
    </Wrapper>
  );
};
