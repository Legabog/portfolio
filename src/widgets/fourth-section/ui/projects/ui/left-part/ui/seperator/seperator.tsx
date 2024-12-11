import { FC } from 'react';

import { PROJECTS_SVG } from '../../constants';
import { Props } from '../../types';
import { Wrapper, StickyObject, IconWrapper } from './seperator.styled';

export const Seperator: FC<Pick<Props, 'absoluteRef' | 'overlappingType'>> = ({
  absoluteRef,
  overlappingType,
}) => (
  <Wrapper data-testid='left-part-seperator'>
    <StickyObject>
      <IconWrapper ref={ absoluteRef } overlappingType={ overlappingType }>
        {PROJECTS_SVG[overlappingType]}
      </IconWrapper>
    </StickyObject>
  </Wrapper>
);
