import { FC } from 'react';
import dynamic from 'next/dynamic';

import { Loader } from '@shared/ui';
import { Wrapper } from './first-section.styled';
import { FirstSectionTypedText } from './ui';

const TechnologyPlanet = dynamic(() => import('./ui/technology-planet'), {
  loading: () => <Loader />,
  ssr: false,
});

export const FirstSection: FC = () => (
  <Wrapper>
    <FirstSectionTypedText />
    <TechnologyPlanet />
  </Wrapper>
);
