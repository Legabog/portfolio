import { FC } from 'react';

import { Wrapper, Span, Li } from './carusel.styled';
import { Props } from './types';
import { useLogic } from './lib';

export const Carusel: FC<Props> = ({ caruselType, customStyles = '', words }) => {
  const { customCaruselStyles, wordStyles, isPaused, onHover, onLeave, resizeRef } =
    useLogic(customStyles);

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
