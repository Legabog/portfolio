import { FC } from 'react';

import { Wrapper, TopBlock, Title } from './navigation-section-item.styled';
import { Props } from './types';
import { useLogic } from './lib';

export const NavigationSectionItem: FC<Props> = ({
  id,
  title,
  overlappingType,
  activeOverlappingType,
  linkifyRef,
  musiconRef,
  poolingRef,
  kodRef,
}) => {
  const { isActive, throttledOnClick, onMouseEnter, onMouseLeave, generatedString, tooltip } =
    useLogic(
      overlappingType,
      activeOverlappingType,
      title,
      linkifyRef,
      musiconRef,
      poolingRef,
      kodRef,
    );
  return (
    <Wrapper
      $isActive={ isActive }
      data-testid={ id }
      title={ tooltip }
      onClick={ throttledOnClick }
      onMouseEnter={ onMouseEnter }
      onMouseLeave={ onMouseLeave }
    >
      <TopBlock />
      <Title>{generatedString}</Title>
    </Wrapper>
  );
};
