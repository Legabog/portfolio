import { FC, useState } from 'react';

import { useMediaQuery, useResizeObserver } from '@shared/hooks';
import { Wrapper, Span, Li } from './carusel.styled';
import { Props } from './types';

export const Carusel: FC<Props> = ({ caruselType, technologies }) => {
  const isBreakpoint = useMediaQuery(600);
  const [caruselStyles, setCaruselStyles] = useState<string>(
    `width: ${window.innerWidth / (isBreakpoint ? 2.5 : 1)}px;`,
  );
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const onHover = () => setIsPaused(true);
  const onLeave = () => setIsPaused(false);

  const resizeHandler = () =>
    setCaruselStyles(`width: ${window.innerWidth / (isBreakpoint ? 2.5 : 1)}px;`);
  const resizeRef = useResizeObserver(resizeHandler);

  return (
    <Wrapper
      ref={ resizeRef }
      $customStyles={ caruselStyles }
      data-testid={ `project-section-${caruselType}-carusel` }
    >
      {[...Array(2)].map((_, index) => (
        <Span key={ index } $caruselType={ caruselType } $isPaused={ isPaused }>
          {technologies.map(({ id, icon, title }) => (
            <Li key={ id } title={ title } onMouseEnter={ onHover } onMouseLeave={ onLeave }>
              {icon}
            </Li>
          ))}
        </Span>
      ))}
    </Wrapper>
  );
};
