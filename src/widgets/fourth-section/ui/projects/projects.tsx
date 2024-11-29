import { FC } from 'react';

import { Wrapper, RightPart, VTB, LINKIFY, AMUSIC } from './projects.styled';
import { useLogic } from './lib';
import { LeftPart } from './ui';

export const Projects: FC = () => {
  const { overlappingType, absoluteRef, linkifyRef, amusicRef, vtbRef } = useLogic();

  return (
    <Wrapper data-testid='projects'>
      <LeftPart absoluteRef={ absoluteRef } overlappingType={ overlappingType } />
      <RightPart>
        <LINKIFY ref={ linkifyRef } />
        <AMUSIC ref={ amusicRef } />
        <VTB ref={ vtbRef } />
      </RightPart>
    </Wrapper>
  );
};
