import { FC } from 'react';

import { Wrapper, Span, Li, IconWrapper, IconText } from './carusel.styled';
import { Props } from './types';
import { useLogic } from './lib';

export const Carusel: FC<Props> = ({ caruselType, technologies }) => {
  const { caruselStyles, isPaused, onHover, onLeave, resizeRef } = useLogic();

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
