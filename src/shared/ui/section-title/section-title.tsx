import { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { Wrapper, TopNumber } from './section-title.styled';
import { Props } from './types';

export const SectionTitle: FC<Props> = ({ title, topNumber, animatedSlicedTitle = '' }) => (
  <Wrapper data-testid='section-title' title={ title }>
    <TopNumber>{topNumber}</TopNumber>
    <TypeAnimation
      repeat={ Infinity }
      sequence={ [title, 1000, animatedSlicedTitle, 1000] }
      speed={ 30 }
    />
  </Wrapper>
);
