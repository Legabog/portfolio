import { FC } from 'react';

import { Wrapper, RightPart, VTB, LINKIFY, MUSICON } from './projects.styled';
import { useLogic } from './lib';
import { LeftPart } from './ui';

export const Projects: FC = () => {
  const { overlappingType, absoluteRef, linkifyRef, musiconRef, vtbRef } = useLogic();

  return (
    <Wrapper data-testid='projects'>
      <LeftPart absoluteRef={ absoluteRef } overlappingType={ overlappingType } />
      <RightPart>
        <LINKIFY ref={ linkifyRef } />
        <MUSICON ref={ musiconRef } />
        <VTB ref={ vtbRef } />
      </RightPart>
    </Wrapper>
  );
};
