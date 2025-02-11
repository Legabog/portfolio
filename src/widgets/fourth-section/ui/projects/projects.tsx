import { FC } from 'react';

import { Wrapper } from './projects.styled';
import { useLogic } from './lib';
import { LeftPart, RightPart } from './ui';

export const Projects: FC = () => {
  const { overlappingType, absoluteRef, linkifyRef, musiconRef, vtbRef, isBreakpoint } = useLogic();

  return (
    <Wrapper data-testid='projects'>
      {!isBreakpoint && (
        <LeftPart
          absoluteRef={ absoluteRef }
          linkifyRef={ linkifyRef }
          musiconRef={ musiconRef }
          overlappingType={ overlappingType }
          vtbRef={ vtbRef }
        />
      )}
      <RightPart linkifyRef={ linkifyRef } musiconRef={ musiconRef } vtbRef={ vtbRef } />
    </Wrapper>
  );
};
