import { FC } from 'react';

import { Wrapper } from './projects.styled';
import { useLogic } from './lib';
import { LeftPart, RightPart } from './ui';

export const Projects: FC = () => {
  const { overlappingType, absoluteRef, linkifyRef, musiconRef, vtbRef } = useLogic();

  return (
    <Wrapper data-testid='projects'>
      <LeftPart absoluteRef={ absoluteRef } overlappingType={ overlappingType } />
      <RightPart linkifyRef={ linkifyRef } musiconRef={ musiconRef } vtbRef={ vtbRef } />
    </Wrapper>
  );
};
