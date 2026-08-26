'use client';

import { FC } from 'react';

import { Props } from './types';
import { Card, Background, Seperator } from './ui';
import { Wrapper } from './left-part.styled';

export const LeftPart: FC<Props> = ({
  absoluteRef,
  linkifyRef,
  musiconRef,
  poolingRef,
  kodRef,
  overlappingType,
}) => (
  <Wrapper data-testid='left-part'>
    <Card
      kodRef={ kodRef }
      linkifyRef={ linkifyRef }
      musiconRef={ musiconRef }
      overlappingType={ overlappingType }
      poolingRef={ poolingRef }
    />
    <Seperator absoluteRef={ absoluteRef } overlappingType={ overlappingType } />
    <Background />
  </Wrapper>
);
