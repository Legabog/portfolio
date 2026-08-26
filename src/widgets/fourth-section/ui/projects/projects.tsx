import { FC } from 'react';

import { Wrapper } from './projects.styled';
import { useLogic } from './lib';
import { LeftPart, RightPart } from './ui';

export const Projects: FC = () => {
  const { overlappingType, absoluteRef, poolingRef, linkifyRef, musiconRef, kodRef, isBreakpoint } =
    useLogic();

  return (
    <Wrapper data-testid='projects'>
      {!isBreakpoint && (
        <LeftPart
          absoluteRef={ absoluteRef }
          kodRef={ kodRef }
          linkifyRef={ linkifyRef }
          musiconRef={ musiconRef }
          overlappingType={ overlappingType }
          poolingRef={ poolingRef }
        />
      )}
      <RightPart
        kodRef={ kodRef }
        linkifyRef={ linkifyRef }
        musiconRef={ musiconRef }
        poolingRef={ poolingRef }
      />
    </Wrapper>
  );
};
