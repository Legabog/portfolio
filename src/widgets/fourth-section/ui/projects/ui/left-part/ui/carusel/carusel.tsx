import { FC, useState } from 'react';

import { Wrapper, Span, Li } from './carusel.styled';
import { Props } from './types';

export const Carusel: FC<Props> = ({ caruselType, customStyles, words }) => {
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const onHover = () => setIsPaused(true);
  const onLeave = () => setIsPaused(false);

  return (
    <Wrapper
      customStyles={ customStyles }
      data-testid={ `${caruselType}-carusel` }
      onMouseEnter={ onHover }
      onMouseLeave={ onLeave }
    >
      {[...Array(2)].map((_, index) => (
        <Span key={ index } caruselType={ caruselType } isPaused={ isPaused }>
          {words.map(({ id, text }) => (
            <Li key={ id }>{text}</Li>
          ))}
        </Span>
      ))}
    </Wrapper>
  );
};
