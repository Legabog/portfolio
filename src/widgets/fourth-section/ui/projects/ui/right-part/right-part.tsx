'use client';

import { FC } from 'react';

import { Props } from './types';
import { Wrapper } from './right-part.styled';
import { ProjectSection } from './ui';

export const RightPart: FC<Props> = ({ linkifyRef, musiconRef, vtbRef }) => (
  <Wrapper data-testid='right-part'>
    <ProjectSection sectionRef={ linkifyRef } />
    <ProjectSection sectionRef={ musiconRef } />
    <ProjectSection sectionRef={ vtbRef } />
  </Wrapper>
);
