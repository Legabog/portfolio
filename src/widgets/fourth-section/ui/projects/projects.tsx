import { FC } from 'react';

import { Wrapper, RightPart, VTB, LINKIFY, MUSICON, TempCard } from './projects.styled';
import { useLogic } from './lib';
import { LeftPart } from './ui';

export const Projects: FC = () => {
  const { overlappingType, absoluteRef, linkifyRef, musiconRef, vtbRef } = useLogic();

  return (
    <Wrapper data-testid='projects'>
      <LeftPart absoluteRef={ absoluteRef } overlappingType={ overlappingType } />
      <RightPart>
        <LINKIFY ref={ linkifyRef }>
          <TempCard>LINKIFY</TempCard>
        </LINKIFY>
        <MUSICON ref={ musiconRef }>
          <TempCard>MUSICON</TempCard>
        </MUSICON>
        <VTB ref={ vtbRef }>
          <TempCard>VTB</TempCard>
        </VTB>
      </RightPart>
    </Wrapper>
  );
};
