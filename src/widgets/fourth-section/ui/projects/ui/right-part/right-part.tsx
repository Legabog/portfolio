'use client';

import { FC } from 'react';

import { Props } from './types';
import { Wrapper } from './right-part.styled';
import { ProjectSection, CommonScrollSection } from './ui';
import { useAdditionalLogic } from './lib';

export const RightPart: FC<Props> = ({ linkifyRef, musiconRef, vtbRef }) => {
  const { projectsMap } = useAdditionalLogic(linkifyRef, musiconRef, vtbRef);

  return (
    <Wrapper data-testid='right-part'>
      <CommonScrollSection />
      {projectsMap.map((props) => (
        <ProjectSection key={ props.id } { ...props } />
      ))}
    </Wrapper>
  );
};
