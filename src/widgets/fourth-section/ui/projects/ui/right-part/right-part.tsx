'use client';

import { FC } from 'react';

import { Props } from './types';
import { Wrapper } from './right-part.styled';
import { ProjectSection, CommonScrollSection } from './ui';
import { useLogic } from './lib';

export const RightPart: FC<Props> = (props) => {
  const { projectsMap } = useLogic(props);

  return (
    <Wrapper data-testid='right-part'>
      <CommonScrollSection />
      {projectsMap.map((props) => {
        const { id } = props;
        return <ProjectSection key={ id } { ...props } />;
      })}
    </Wrapper>
  );
};
