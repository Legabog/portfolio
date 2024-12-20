import { FC, useState } from 'react';

import { useMediaQuery, useResizeObserver } from '@shared/hooks';
import { Wrapper, Span, Li, IconWrapper, IconText } from './carusel.styled';
import { Props } from './types';

export const Carusel: FC<Props> = ({ caruselType, technologies }) => {
  const isBreakpoint = useMediaQuery(900);
  const conditionalWidth = !isBreakpoint
    ? `width: ${window.innerWidth * 0.8}px;`
    : `width: ${window.innerWidth - 40}px;`;
  const [caruselStyles, setCaruselStyles] = useState<string>(conditionalWidth);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const onHover = () => setIsPaused(true);
  const onLeave = () => setIsPaused(false);

  const resizeHandler = () => setCaruselStyles(conditionalWidth);
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
              <IconWrapper>
                {icon}
                <IconText>{title}</IconText>
              </IconWrapper>
            </Li>
          ))}
        </Span>
      ))}
    </Wrapper>
  );
};
