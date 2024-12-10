'use client';

import { FC } from 'react';

import { Props } from './types';
import { Card, Background, Seperator } from './ui';
import { Wrapper } from './left-part.styled';

export const LeftPart: FC<Props> = ({ absoluteRef, overlappingType }) => (
  <Wrapper data-testid='left-part'>
    <Card overlappingType={ overlappingType } />
    <Seperator absoluteRef={ absoluteRef } overlappingType={ overlappingType } />
    <Background />
  </Wrapper>
);
