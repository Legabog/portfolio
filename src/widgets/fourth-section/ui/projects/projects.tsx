import { FC } from 'react';

import { useMediaQuery } from '@shared/hooks';
import { Wrapper } from './projects.styled';
import { useLogic } from './lib';
import { LeftPart, RightPart } from './ui';

export const Projects: FC = () => {
  const isBreakpoint = useMediaQuery(900);
  const { overlappingType, absoluteRef, linkifyRef, musiconRef, vtbRef } = useLogic();

  return (
    <Wrapper data-testid='projects'>
      {!isBreakpoint && <LeftPart absoluteRef={ absoluteRef } overlappingType={ overlappingType } />}
      <RightPart linkifyRef={ linkifyRef } musiconRef={ musiconRef } vtbRef={ vtbRef } />
    </Wrapper>
  );
};
